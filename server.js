// Import all the necessary npm modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models for db operations
const UserModel = require('./models/User.js');
const FeedModel = require('./models/Feeds.js');
// Import routes 
const UserRoutes = require('./routes/User.js');
const FeedRoutes = require('./routes/Feeds.js');

// Configure express to parse BODY
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Connect to our database
const dbURL = process.env.DB_URL // your db url
mongoose.connect(
    dbURL,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(
   ()=>{ // Sorry, not this tim
       console.log('db is connected')
   } 
).catch(
    (e)=>{
        console.log('no response from mongoose', e)
    }
)

/*
 * Routes for our web app server
 */

app.get(
    '/',  // http://www.example.com/
    (req, res)=>{
        res.send("<h1 style='color:blue'>Welcome Home</h1>");
    }
);


app.use(
    '/user',  // http://www.example.com/user/
    UserRoutes
);

app.use(
    '/feed',  // http://www.example.com/feed/
    FeedRoutes
);

app.get(
    '*',
    (req, res)=>{
        res.send("<h1 style='color:black'>404</h1>");
    }
);


// Liste to the port
app.listen(
    process.env.PORT || 3010, // connect to this port
    () => {
        console.log('you are connected');
    } // do this when you're connected
);


