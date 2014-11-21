'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Profession = require('./profession.model');

// Get list of professions
exports.index = function(req, res) {
  Profession.find().populate('parent').exec(function(err, professions){
    if(err) { return handleError(res, err); }
    return res.json(200, professions);
  });
};

// Get a single profession
exports.show = function(req, res) {
  Profession.findById(req.params.id, function (err, profession) {
    if(err) { return handleError(res, err); }
    if(!profession) { return res.send(404); }
    return res.json(profession);
  });
};

exports.parents = function(req, res){
  Profession.find({ parent: null }, function(err, professions){
    if(err){ return handleError(res, err) }
    return res.json(professions)
  });
};

// Creates a new profession in the DB.
exports.create = function(req, res) {

  req.body.parent = mongoose.Types.ObjectId(req.body.parent)

  Profession.create(req.body, function(err, profession) {
    if(err) { return handleError(res, err); }
    return res.json(201, profession);
  });
};

// Updates an existing profession in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Profession.findById(req.params.id, function (err, profession) {
    if (err) { return handleError(res, err); }
    if(!profession) { return res.send(404); }
    var updated = _.merge(profession, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, profession);
    });
  });
};

// Deletes a profession from the DB.
exports.destroy = function(req, res) {
  Profession.findById(req.params.id, function (err, profession) {
    if(err) { return handleError(res, err); }
    if(!profession) { return res.send(404); }
    profession.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}