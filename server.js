
const http = require("http")
const mongodb = require("mongodb")

let db;

const connectionString = "mongodb+srv://Jackdev0905:java090501@cluster0.o2aav.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client)=>{
        module.exports = client;
        if(err) console.log("ERROR on connection MongoDB");
        else{
            console.log(" MongoDB connection succeed")
            const app = require("./app")
            const server = http.createServer(app);
            let PORT = 3008;
            server.listen(PORT, function () {
                console.log(`The server is running succcessfully on PORT: ${PORT}`, "http://localhost:3008/");
                
            })
        }
        
    }
)


