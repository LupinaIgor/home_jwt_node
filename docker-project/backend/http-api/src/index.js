const SERVER_NAME = process.env.SERVER_NAME || "http module";
const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_CACHE_DB = process.env.REDIS_CACHE_DB || 0;
const CACHE_TTL = process.env.CACHE_TTL || 9999999;

import { Keyv } from 'keyv';
import KeyvRedis from '@keyv/redis';
import { createCache } from 'cache-manager';

const cache = createCache({
    stores: [
        //  Redis Store
        new Keyv({
            store: new KeyvRedis(`redis://${REDIS_HOST}:${REDIS_PORT}/${REDIS_CACHE_DB}`),
        }),
    ],
})

console.log(`redis://${REDIS_HOST}:${REDIS_PORT}/${REDIS_CACHE_DB}`)

cache.on('set', (args) => {
    console.info('Redis set:', args);
});


import { createServer } from "http";


const httpServer
    = createServer( async (req, res) => {
    console.log('Some request');

    let msg = `<html><body><ul><li>SERVER_NAME = ${SERVER_NAME}</li>`;
    msg += '<li> Cache Var:' + (await cache.get('Var')) + '</li>';
    msg += '<li> Cache ServerName:' + (await cache.get('ServerName')) + '</li>';
    msg += '</ul></body></html>';

    res.end(msg);
})

httpServer.listen(SERVER_PORT, SERVER_HOST,async () => {
    cache.set('Var', 'Value', CACHE_TTL)
        .then(d => {
            console.log('then',d)
        })
        .catch(e => {
            console.error(e)
        });
    await cache.set('ServerName', SERVER_NAME, CACHE_TTL);

    console.log(`HTTP Server '${SERVER_NAME}' is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});