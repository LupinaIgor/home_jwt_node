import {SERVER_NAME} from "./../config/index.js";

export const handleRoute2 = (req, res) => {
    console.log('Some request 2');
    res.send(`2 from '${SERVER_NAME}'`);
};