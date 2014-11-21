'use strict';

var _ = require('lodash');
var Pitch = require('./pitch.model');

// Get list of pitchs
exports.index = function(req, res) {
  Pitch.find(function (err, pitchs) {
    if(err) { return handleError(res, err); }
    return res.json(200, pitchs);
  });
};

// Get a single pitch
exports.show = function(req, res) {
  Pitch.findById(req.params.id, function (err, pitch) {
    if(err) { return handleError(res, err); }
    if(!pitch) { return res.send(404); }
    return res.json(pitch);
  });
};

// Creates a new pitch in the DB.
exports.create = function(req, res) {
  Pitch.create(req.body, function(err, pitch) {
    if(err) { return handleError(res, err); }
    return res.json(201, pitch);
  });
};

// Updates an existing pitch in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pitch.findById(req.params.id, function (err, pitch) {
    if (err) { return handleError(res, err); }
    if(!pitch) { return res.send(404); }
    var updated = _.merge(pitch, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pitch);
    });
  });
};

// Deletes a pitch from the DB.
exports.destroy = function(req, res) {
  Pitch.findById(req.params.id, function (err, pitch) {
    if(err) { return handleError(res, err); }
    if(!pitch) { return res.send(404); }
    pitch.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}