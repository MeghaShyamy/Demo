const express = require('express')//npm i express

const app=express();
const path=require('path')
const fs =require('fs');
const { log } = require('console');

const port=3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')//to render html files
app.set('views',__dirname+'/views')//to set the path of html files
app.use(express.static(__dirname+'/public'))//to set the path of css files




app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files})
    })
    
})

app.get('/files/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf-8',function(err,data){
        res.render("show",{filename:req.params.filename,data :data})
    })
})

app.post('/create',function(req,res){
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
    if(err){
        console.log(err)
    }
    else{
        res.redirect('/') 
    }
})
})



// app.get('/profile/:about',(req,res)=>{
//     const name = req.params.about
//     res.send(`Hello ${name}`)
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

