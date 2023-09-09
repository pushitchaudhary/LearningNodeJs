const express = require('express');
const { blogs } = require('./model/index');
const app = express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',async (req,res)=>{
    const blogss = await blogs.findAll();
    res.render('blog.ejs',{blogsData:blogss});
})

app.get('/createBlog',(req,res)=>{
    res.render('blogCreate.ejs');
})

app.get('/fullBlog/:id',async (req,res)=>{
    const id = req.params.id;
    let blog = await blogs.findAll({
        where : {
            id:id
        }
    })

    res.render('fullBlog.ejs',{blog:blog});
})

app.post('/createBlog',async(req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle
    const description = req.body.description

    await blogs.create({
        title:title,
        subTitle:subTitle,
        description:description
    })
    res.redirect('/')

})


app.get('/delete/:id',async(req,res)=>{
    const id = req.params.id;
     await blogs.destroy({
        where:{
            id:id
        }
    })
    res.redirect('/')
})


app.listen(4000,()=>{
    console.log('Node Js has started at 4000');
})