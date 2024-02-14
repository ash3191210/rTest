const app=require('express')()
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT||3000,()=>{
    console.log("server is listning....")
})