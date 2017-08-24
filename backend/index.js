const express = require('express');
const request = require('request');
const mcache = require('memory-cache');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/words/:word', (req, res) => {
  const { word } = req.params;

  const uri = 'https://wordsapiv1.p.mashape.com/words/'+ word +'/synonyms';
  const options = {
    method: 'GET',
    uri: uri,
    headers: {
      "X-Mashape-Key" :" nwqghFGnmemshoQcTjXKKE4dtJOPp1BT3GKjsnubIM7p67vKGh",
      "Accept" : "application/json"
    }
  };

  const casheInfo = mcache.get(word);

  casheInfo ?
    res.send({body: casheInfo}) :
    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        const bodyData = JSON.parse(body);
        mcache.put(word, bodyData);
        res.send({body: bodyData});
      } else {
        res.send({body: {word: '', synonyms: []}});
      }
    });
});

const server = app.listen(4201, ()=> {
  console.log('Server is running at http://localhost:' + server.address().port);
});

module.exports = server;