const express = require('express');
const { blogs } = require('./model/index');
const app = express();

require('./model/index')

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.render('blog');
})

app.get('/createBlog',(req,res)=>{
    res.render('blogCreate')
})

app.post('/createBlog',async (req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    await blogs.create({
        title:title,
        subTitle:subTitle,
        description:description
    })
    res.send("successfully");
})

app.listen(4000,()=>{
    console.log("Node Js has stared at port number 4000");
})