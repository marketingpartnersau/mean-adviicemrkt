'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfessionSchema = new Schema({
  created: {
  	type: Date,
  	default: Date.now
  },
  title: String,
  parent: {
  	type: Schema.ObjectId,
  	ref: 'Profession'
  },
  active: Boolean
});

module.exports = mongoose.model('Profession', ProfessionSchema);