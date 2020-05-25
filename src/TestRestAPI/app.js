const express = require('express')
const bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// curl  -H "Content-Type: application/json"  -X GET http://localhost:3000/api/values?name=titi
app.get('/api/values', function (req, res) {
    try
    {
    console.log('name: ', req.query.name);
    var response = {'testresponse': ''};
    response.testresponse = req.query.name;
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(response));
    }
    catch(err)
    {
        res.writeHead(400, {'content-type': 'application/json'});
        res.end(JSON.stringify(err));
    
    }
 
    //    res.send('Hello World!\n')
})

// curl -d "{\"name\":\"0123456789\"}" -H "Content-Type: application/json"  -X POST http://localhost:3000/api/values
app.post('/api/values', function (req, res) {
   // var obj = JSON.parse(req.body);
   // var response = {'testresponse': ''};
   // response.testresponse = obj.name;
   // res.send(response.toString());
   try
   {
   console.log('Got body:', req.body);
   var response = {'testresponse': ''};
   response.testresponse = req.body.name;
   res.writeHead(200, {'content-type': 'application/json'});
   res.end(JSON.stringify(response));

}
catch(err)
{
    res.writeHead(400, {'content-type': 'application/json'});
    res.end(JSON.stringify(err));

}

})

// Export server for testing.
var server = app.listen(3000);
module.exports = server;
