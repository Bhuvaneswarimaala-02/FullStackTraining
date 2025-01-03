var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var app = express()
var User = require('./models/users')
const PORT = 3001
app.use(express.json())
mdb.connect("mongodb://127.0.0.1:27017/").then(() => {
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
    var {firstName, lastName, email} = req.body
    console.log(firstName, lastName, email);
    try{
        var newUser = new User({
            firstName:firstName,
            lastName:lastName,
            email:email
        })
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

app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`)
})