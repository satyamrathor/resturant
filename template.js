var http=require('http');
var express=require('express')
const path=require('path')
const port=8000;
var app=express();
const mongoose=require('mongoose');
const { api } = require('./router/api');
const Schema=mongoose.Schema;





// var hbs=require('hbs');
// const staticPath=path.join(__dirname,".../public");
// app.use(express.static(staticPath));
// app.set("view engine","hbs");
// app.get("",(req,res)=>{
//     res.render("index")
// });
// app.get("/",(req,res)=>{
//   res.send("hello worllllddd")
// })

var router = express.Router();
app.get('/', function (req, res) {
    res.send('this is the main Page');
});

app.use('/api', router);
router.get('/', function (req, res) {
    res.send('This is the second page');
});              

router.post('/api/login',api.login);

mongoose.connect("mongodb://localhost:27017/ttchannel",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successful...."))
.catch((err)=>console.log(err));



// function my_func(){
//   console.log("satyam")
// }
// setTimeout(my_func,4000)


// console.log("first");
// const timeoutObj = setTimeout(() => {
//   console.log('timeout beyond time');
// }, 1500);

// const immediateObj = setImmediate(() => {
//   console.log('immediately executing immediate');
// });

// const intervalObj = setInterval(() => {
//   console.log('interviewing the interval');
// }, 500);

// clearTimeout(timeoutObj);
// clearImmediate(immediateObj);
// clearInterval(intervalObj);

app.listen(port,()=>{
  console.log(`listening to the port ${port}`) ; 
 // console.log("this is awesome if you learn js");
})

