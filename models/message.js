const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        title: {type: String, required: true},
        message: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        dateCreated: {type: Date, required: true}
    }
);

MessageSchema
    .virtual('url')
    .get(function(){
        return '/message/' + this._id;
    });

module.exports = mongoose.model('Message', MessageSchema)