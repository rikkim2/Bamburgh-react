const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();
const AD_Router = require("./admin-dashboard/src/Route/index.js")
const app = express();
const cors = require('cors');


// app.use((req,res)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Origin:http://localhost:3000");
//     res.header("Access-Control-Allow-Methods:POST,GET,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Headers:X-PINGOTHER,Content-Type")
//     res.header("Access-Control-Max-Age:86400")
// })
const corsOptions = {
    methods:['POST','GET','DELETE','OPTIONS'],
    //origin: ['http://daeseungtax.co.kr', 'http://localhost:3000'],
    origin: 'http://daeseungtax.co.kr',
    credentials: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;
const session = require('express-session')
app.use(session({
    HttpOnly:true,
    secure:true,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:24000*60*60}
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/",AD_Router);
app.use(express.static('build'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/build/index.html');
})
app.listen(port, () => console.log(`Listening onn port ${port}`));

