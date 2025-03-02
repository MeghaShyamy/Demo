const express =require('express')
const app= express()

const usermodel=require('./usermodels');
const { name } = require('ejs');


app.get('/',(req,res)=>{
    res.send("helloword");
})
app.get('/create',async (req,res)=>{
  let createduser = await usermodel.create({
        name:"sachin3",
        username:"sachin123",
        email:"sha@gmail.com"
    })
    res.send(createduser)
})

app.get('/update',async(req,res)=>{
    let updateduser = await usermodel.findOneAndUpdate({
        name:"sachin123"
    },{
        name:"sa6"
    })
    res.send(updateduser)
})

app.get('/read',async(req,res)=>{
    let readuser = await usermodel.find({name:"sa6"})
    res.send(readuser)
})

app.get('/delete',async(req,res)=>{
    let deleteuser = await usermodel.findOneAndDelete({
        name:"sa6"
    })
    res.send(deleteuser)
})

app.listen(3000,()=>{
    console.log("Server is running on poort 3000")
})