var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var speakersData = require('./speakers-data-schema');
var usersData = require('./users-data-schema');

mongoose.Promise = Promise;

var seminarsDataSchema = new Schema
(
    {
        title: {type:String, default: ''},
        speaker: {
            type: Schema.Types.ObjectId,
            ref: 'speakersData'
        },
        schedule: {type:Date, default: ''},
        location: {
            type:String,
            enum: [
                'none',
                'bulwagang-balagtas',
                'claro-m-recto',
                'ictc',
                'pup-theater',
                'avr-cea',
                'avr-cot',
                'manila-room'
            ],
            default: 'none'
        },
        registrants: [{
            type: Schema.Types.ObjectId,
            ref: 'usersData'
        }]
    },
    {
        collection: 'seminarsData'
    }
);

seminarsDataSchema.plugin(timestamps);

module.exports = mongoose.model('seminarsData',seminarsDataSchema);