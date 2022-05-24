const { response } = require("express");
const express=require("express")   //this is require for every application for importing any package

const app=express()   //this is responsible for creating further route and middleware and server

const port=8000

//create middleware
const middlewareA=(request,response,next)=>{
    console.log('first middleware');
    next()
}
const middlewareB=(request,respose,next)=>{
    console.log('middlewaresecond');
    next()                                    //the next is use to call the next middleware
}

app.use(middlewareA)  //this avilable for all route


//creating the route
app.get("/",(request,response)=>{
    response.send("hello middleware")
})

app.get("/home",middlewareB,(request,response)=>{   //the middlewareB avilabe for home 
    response.send('home page')
})


//listen the port

app.listen(port,()=>{
    console.log(`server run at the port ${port}`);
})
