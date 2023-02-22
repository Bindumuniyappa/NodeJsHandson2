const express =require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("I am on the homepage")
    res.end();
})                      

app.get("/gallery",(req,res)=>{
    res.send("I am in the gallerypage")
    res.end();
})

app.get("/contact",(req,res)=>{
    res.send("I am in the contactpage")
    res.end();
})

app.post("/submit",(req,res)=>{
    res.send("post worked.")
    res.end();
})

app.listen(3000,()=>{
    console.log("Application is running on port 3000")
});