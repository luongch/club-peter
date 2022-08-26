const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        title: {type: String, required: true},
        text: {type: String, required: true},
        message: {type: String, required: true}
    }
);

MessageSchema
    .virtual('url')
    .get(function(){
        return '/message/' + this._id;
    });

module.exports = mongoose.model('Message', MessageSchema)