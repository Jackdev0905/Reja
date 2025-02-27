
const express = require("express");
const app = express();
const db = require("./server").db()
/*
const fs = require("fs")
let user;
fs.readFile("database/user.json", "utf-8", (err, data)=>{
    if(err){
        console.log("ERROR: ", err);
    } else{
        user = JSON.parse(data)
    }
})
*/


// 1 Entry
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2 session

// 3 views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    // console.log(new_reja);
  
    db.collection("plans").insertOne({
      reja: new_reja
    }, (err, data) => {
      console.log(data.ops);
      res.json(data.ops[0]);
      
      // if (err) {
      //   console.log(err);
      //   res.end("something went wrong");
      // } else {
      //   res.end("plan inserted successfully");
      // };
    });
  
  });

app.get("/", (req, res) => {
    console.log("user entered /");
  
    db.collection("plans").find().toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", {
          items: data
        });
      }
    });
  });

app.get("/author", function(req, res){
    res.render("author", {user: user});
});

app.get("/gift", function(req, res){
    res.end("This is gift page");
});

module.exports = app;