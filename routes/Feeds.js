const express = require('express');
const router = express.Router();


const FeedModel = require('../models/Feeds.js')

router.get(
    '/create',
    (req, res)=>{
        res.send("Here are your feeds");}
)

router.post(
    '/create', // http://www.myapp.com/feeds/create
    (req, res)=>{

        const formdata = {
            'description': req.body.description,
            'image': req.body.image,
            'hashtags': req.body.hashtags
        }
        const theFeedModel = new FeedModel(formdata);
        theFeedModel.save();
        res.send('Feed is created');
    }
);

router.get(
    '/all',
    (req, res) => {
        FeedModel
        .find()
        .then((results) =>{
            res.json({
            msg:'here are your feeds',
            results: results
        })
    })
        
    }
);
module.exports = router;