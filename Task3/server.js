var express = require('express'); //used for routing
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);//used to provide http functionality
app.use(bodyParser.json());







app.use(express.static(__dirname + '/www'));// allow files public files to be hosted


let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + "port: " + port);
    console.log("Server started at: "+ h + ":" + m);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/form.html');
});

app.post('/api/login', function (req, res) {
    let users = [{'email':"abc@email.com.au", "pwd": "123"},{'email':"user@email.com", "pwd": "password"},{'email':"123@email.com", "pwd": "abc"}];

    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);//For Testing Purposes
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for (let i=0;i<users.length;i++) {
        if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
            customer.valid = true;
        }
    }
    res.send(customer);
});