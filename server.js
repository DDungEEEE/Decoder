const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

const port = 443;

const serverOption = {
    key :fs.readFileSync('../private.key'),
    cert : fs.readFileSync('../private.crt'),
    passphrase: 'rhdiddl12',
    requestCert: false,
    rejectUnauthorized: false
}


const server = https.createServer(serverOption, (req, res) => {  // 수정: 함수 전달 방식 수정
    res.writeHead(200);
    res.end('Parkminseo Babo');
});

server.listen(port,() => {
    console.log(`${port}번에서 서버 실행중`)
})

