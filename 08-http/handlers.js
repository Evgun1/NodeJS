const fs = require('fs');
const qs = require('querystring');
const comments = require('./date');
const client = require('./pgClient');

const getHome = (req, res) => {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loadeing HTNL file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(data);
        }
    });
};

const getHTML = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Greeting from the http server</h1>');
    res.write('</div></body></html>');
    res.end();
};

const getText = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain ');
    res.end('This is plalin text');
};

const getComments = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
};

const handelNotFound = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Page not found</h1>');
};

const postComment = (req, res) => {
    res.setHeader('Content-Type', 'text/plain ');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                console.log(body);
                const comment = qs.parse(body);
                comment.id = parseInt(comment.id);
                await client.query(
                    `INSERT INTO table_comments VALUES ($1, $2, $3)`,
                    [comment.id, comment.text, comment.author]
                );
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Comment data was received</h1>');
                res.write('<a href="/">Submit one more comment</a>');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid Form data');
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';
        req.on('data', (chunk) => (commentJSON += chunk));

        req.on('end', async () => {
            try {
                comments.push(JSON.parse(commentJSON));
                const comment = JSON.parse(commentJSON);
                await client.query(
                    `INSERT INTO table_comments VALUES ($1, $2, $3)`,
                    [comment.id, comment.text, comment.author]
                );
                res.statusCode = 200;
                res.end('Comment data was received');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be in the JSON format or as form');
    }
};

module.exports = {
    getHome,
    getHTML,
    getText,
    getComments,
    postComment,
    handelNotFound,
};
