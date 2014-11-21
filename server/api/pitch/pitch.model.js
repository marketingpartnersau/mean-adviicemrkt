'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PitchSchema = new Schema({
  content: String,
  user: {
  	type: Schema.ObjectId,
  	ref: 'user'
  },
  request: {
  	type: Schema.ObjectId,
  	ref: 'request'
  },
  created: {
  	type: Date,
  	default: Date.now
  },
  active: Boolean
});

module.exports = mongoose.model('Pitch', PitchSchema);