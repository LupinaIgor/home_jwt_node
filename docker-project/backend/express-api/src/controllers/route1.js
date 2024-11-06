import {SERVER_NAME} from "./../config/index.js";

export const handleRoute1 = (req, res) => {
    console.log('Some request 1');
    res.send(`1 from '${SERVER_NAME}'`);
};