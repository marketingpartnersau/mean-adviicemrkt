'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  created: {
  	type: Date,
  	default: Date.now
  },
  content: String,
  active: Boolean,
  type: {
    type: Schema.ObjectId,
    ref: 'Profession'
  },
  user: {
  	type: Schema.ObjectId,
  	ref: 'User'
  }
});

module.exports = mongoose.model('Request', RequestSchema);