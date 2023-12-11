const http = require('http');
const {
    getComments,
    getHTML,
    getText,
    handelNotFound,
    postComment,
    getHome,
} = require('./handlers');
const client = require('./pgClient');
const { log } = require('console');

const PROT = 5000;

async function start() {
    try {
        await client.connect();
        server.listen(PROT, () => {
            console.log(`Server was lauched on port ${PROT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }

    if (req.method === 'GET' && req.url === '/http') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }

    handelNotFound(req, res);
});
start();
