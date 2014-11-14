'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  type: String,
  content: String,
  active: Boolean
});

module.exports = mongoose.model('Request', RequestSchema);