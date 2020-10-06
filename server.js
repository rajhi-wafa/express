const express= require('express')
const app =express()
app.use(express.json());
app.use(express.static('public'));
/*app.get('/',(req,res)=>{res.send('HELLO WORLD');});*/
const port=5000
app.listen(port,(err)=>{
    err?
console.log(err)
:console.log(`the srever is runing on port ${port}....`)});
