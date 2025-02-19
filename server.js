console.log("salom");
const express = require("express");
const app = express();
const http = require("http")

// 1 Entry
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2 session

// 3 views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) =>{
    res.json({test: "success"})
});

app.get("/", function(req, res){
    res.render("harid");
});

app.get("/gift", function(req, res){
    res.end("This is gift page");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succcessfully on PORT: ${PORT}`);
    
})