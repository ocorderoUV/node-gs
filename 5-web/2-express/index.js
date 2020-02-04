const express = require('express');

const server = express();

server.get('/',(req,res)=>{
  res.send('Hello Express');
});

server.get('/About',(req,res)=>{
  res.send('About...');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
