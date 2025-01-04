var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var app = express()
var User = require('./models/users')
var cors = require('cors')
var env=require('dotenv')
const PORT = 3001
env.config()
app.use(express.json())
app.use(cors())
mdb.connect(process.env.MONGO_URL).then(() => { //if not yet deployed use"http://127.0.0.1:3001"
    console.log("process.env.MONGO_URL")
    console.log("MongoDB Connection Successful");
}).catch(() => {
    console.log("Check your connection String");
})

app.get('/', (req, res) => {
    res.send("Welcome to Backend server")
    // res.json("Welcome to Backend server")
})
app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend server", url: "localhost", port: `${PORT}` })
})
app.get('/static', (req, res) => {
    // res.sendFile('/Users/DELL/OneDrive/Desktop/FSTraining/FullStackBackEnd/index.html') //you need absolute path for static 
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup',(req,res)=>{
    console.log(req.body);
    var {firstName, lastName, email, password} = req.body
    // console.log(firstName, lastName, email);
    try{
        // var newUser = new User({
        //     firstName:firstName,
        //     lastName:lastName,
        //     email:email
        // })   // you dont have to destrucuture all time

        // var newUser = new User({req.body}) //this is also correct

        var newUser = new User(req.body)
        console.log(req.body.password)
        newUser.save()
        console.log("User added SUccessfully");
        res.status(200).send("User Added Successfully")
    }
    catch(err){
        console.log(err);
    }
})

app.get('/getsignup',async (req,res)=>{
    try{
        var allSignUpRecords=await User.find()
        res.json(allSignUpRecords)
        console.log("All data Fetched")
    }
    catch(err){
        console.log(err);
        res.sendFile(err)
    }
})

// login works
// app.post('/login',async(req, res)=>{
//     var {email,password}=req.body
//     try{
//         var existingUser =await User.findOne({email:email})
//         console.log(existingUser);
//         res.json({message:"Login Successful", isLoggedIn:true})
//     }
//     catch(err){
//         consolelog("Login Failed")
//     }
// })


app.post('/login',async(req, res)=>{
    var {email,password}=req.body
    try{
        var existingUser =await User.findOne({email:email})
        if(existingUser){
            if(existingUser.password !== password)
            {
                res.json({message:"Invalid Credentials", isLoggedIn:false})
            }
            else{
                res.json({message:"Login Successful",isLoggedIn:true})
            }
        }
        else{
            res.json({message:"User not found",isLoggedIn:false})
        }
        
    }
    catch(err){
        consolelog("Login Failed")
    }
})


app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`)
})