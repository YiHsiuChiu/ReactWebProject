var express = require('express');
// var cors = require('cors');
var mongoclient = require('mongodb').MongoClient;

var mongourl = "mongodb://localhost:27017/";
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', false)
    res.header("Access-Control-Allow-Headers", "*")
    next()
})
// app.use(cors({ origin: '*' }));

let database = null;

app.get('/food', function (req, res) {
    var date = new Date(Date.now());
    var hours = date.getHours();

    var dbo = database.db("React");
    let output = [];
    dbo.collection("Food").find({}).toArray(function (err, result) {
        if (err) throw err;
        let data = result;
        data.forEach(element => {
            if (element.week.indexOf(new Date().getDay().toString()) > -1) {
                if (hours >= element.startTime.split(":")[0]) {
                    if (hours < element.endTime.split(":")[0]) {
                        if (req.query.price != undefined) {
                            // console.log(JSON.parse(req.query.price))
                            let r = JSON.parse(req.query.price).filter((e) => {
                                return element.price.indexOf(e) > -1
                            })
                            if (r.length == 0)
                                return
                        }
                        if (req.query.style != undefined) {
                            let r = JSON.parse(req.query.style).filter((e) => {
                                return element.style.indexOf(e) > -1
                            })
                            if (r.length == 0)
                                return
                        }
                        if (req.query.location != undefined) {
                            let r = JSON.parse(req.query.location).filter((e) => {
                                return element.location.indexOf(e) > -1
                            })
                            if (r.length == 0)
                                return
                        }
                        if (req.query.type != undefined) {
                            let r = JSON.parse(req.query.type).filter((e) => {
                                return element.type.indexOf(e) > -1
                            })
                            if (r.length == 0)
                                return
                        }
                        output.push(element)
                    }
                }
            }
        });
        res.send(output);
    });
});

app.post('/food', function (req, res) {
    console.log(req.body)
    writeData(req.body)
    res.send("data insert");
});

serverInit();

async function serverInit() {
    database = await connectDB();
    app.listen(3000, function () {
        console.log('server listening on port 3000!');
    });
}

function connectDB() {
    // Connect to the db
    return new Promise((resolve, reject) => {
        mongoclient.connect(mongourl, function (err, db) {
            if (err) throw err;
            resolve(db);
            console.log('--- connect on DB ---');
            // db.close(); //關閉連線
        });
    });
}

// function getTime() {
//     var date = new Date(Date.now());
//     var hours = date.getHours();
//     var minutes = "0" + date.getMinutes();
//     var seconds = "0" + date.getSeconds();

//     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//     return formattedTime;
// }

function writeData(packet) {
    var dbo = database.db("React");
    dbo.collection("Food").insertOne(packet, function (err, res) {
        if (err) throw err;
    });
    console.log("--- insert data to DB ---");
}