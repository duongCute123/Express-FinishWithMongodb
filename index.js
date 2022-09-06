var express = require("express")
var app = express()
var bodyParse = require("body-parser")
var cors = require("cors")
var db = require("./public/src/config/mongodbconnect")
var Customer = require("./public/src/model/entity")
app.get("/hello", function (req, res) {
    res.json("Hello anh dương")
})
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
//Kết nối cơ sở dư liêu vào
db.connect();
//chèn dữ liệu vào database
app.post("/create", function (req, res) {
    var data = req.body
    var customer = new Customer(data)
    customer.save()
        .then(customer => {
            res.status(200)
                .json({ 'customer': 'Thêm dữ liệu thành công' })
        })
})
var service = app.listen(8000, function (host, port) {
    var host = service.address().address
    var port = service.address().port
    console.log("Susscess nhé dương", host, port)
})