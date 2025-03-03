
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
const mongodb = require("mongodb")

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
    });
  
  });

  app.post("/delete-item", (req, res)=>{
    const id= req.body.id;
    
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
      res.json({state: "success"})
    })
  })

  app.post("/delete-all", (req, res)=>{
    console.log(req.body);
    
    if(req.body.delete_all){
      db.collection("plans").deleteMany(function(err, data){
      res.json({state: "All plans deleted"})
    })
    }
    
  })

  app.post("/edit-item", (req, res)=>{
    const data= req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, 
    {$set: {reja: data.new_input}}, 
    function(err, data){
      res.json({state: "success"})
    })
    
  })

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