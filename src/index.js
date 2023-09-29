const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const apiroutes = require("./router/index");
const {PORT} = require("./config/serverconfig");
const cors = require("cors");

const starting_service = ()=>{

    const corsOptions = {
        origin: "http://localhost:3000", // Replace with your frontend URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // Enable credentials (if needed)
        optionsSuccessStatus: 204, // Set the response status for preflight requests
      };
      
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(bodyparser.urlencoded({extended:true}))

    app.use(bodyparser.json());

    app.use("/api" , apiroutes);

    app.listen(PORT , ()=>{
        console.log("Sever started on port 8000")
    })
}

starting_service();