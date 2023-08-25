const express= require("express");
const app=express();
const port=process.env.PORT|| 3000;

const dbconnect=require('./db/connection');
const routes=require('./routes/routes');
const bodyparser=require('body-parser');


app.use(bodyparser.urlencoded({extended:true}));

// connecting to the database
dbconnect.connectdb();


//  using routes
app.use('/',routes);


app.listen(port,()=>{
    console.log(`server is running in the port ${port}`);
})