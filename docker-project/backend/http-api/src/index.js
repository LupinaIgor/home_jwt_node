import { createServer } from "http";

const SERVER_NAME = process.env.SERVER_NAME || "http module";
const SERVER_HOST = process.env.SERVER_HOST || "0.0.0.0";
const SERVER_PORT = process.env.SERVER_PORT || 3000;


const httpServer = createServer( (req, res) => {
    console.log('Some request');
    res.end("Hello from: " + SERVER_NAME);
})

httpServer.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(`HTTP Server '${SERVER_NAME}' is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});