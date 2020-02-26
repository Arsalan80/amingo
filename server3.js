const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // interface to manage connection with monogoDB

const UserModel = require('./models/User.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const dbURL = "mongodb+srv://admin:admin321@cluster0-zlho7.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(
    dbURL,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(
   ()=>{
       console.log('db is connected')
   } 
).catch(
    (e) => {
        console.log('no response from mongoose', e)
    }
)

app.get(
    '/',  // http://www.example.com/
    (req, res)=>{
        res.send("<h1 style='color:blue'>Welcome Home</h1>");
    }
);

app.post(
    '/user',
    (req, res)=>{

        const formdata = {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'email': req.body.email,
            'password': req.body.password,
            'occupation': req.body.occupation
        }

        const theUser = new UserModel(formdata);

        theUser.save();
        res.send("User saved")
    }
)

app.get(
    '*',
    (req, res)=>{
        res.send("<h1 style='color:black'>404</h1>");
    }
);

app.listen(
    3010,
    ()=>{
        console.log('you are connected');
    }
)