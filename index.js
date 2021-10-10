const express=require('express');
const app=express()
const router=require('./routes.js')

app.use(router)

// const port=process.env.PORT;
const port=5000;
app.listen(port,()=>{
    console.log(`Server running on Port ${port}`);
})