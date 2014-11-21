/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Profession = require('./profession.model');

exports.register = function(socket) {
  Profession.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Profession.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('profession:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('profession:remove', doc);
}