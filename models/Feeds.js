const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    description: {
        type:String,
        required: true
    },
    image: {
        type:String
    },
    hashtags: {
        type:Array
    },
    Likes: {
        type:Number,
        default:0
    },
    date: {
        type:Date,
        default:Date.now
    }
});

const FeedModel = mongoose.model('feed', FeedSchema);
module.exports = FeedModel;