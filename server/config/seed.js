/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Profession = require('../api/profession/profession.model');
var User = require('../api/user/user.model');

Profession.find({}).remove(function(){
  Profession.create({
    title: 'Real Estate',
    slug: 'real-estate',
    parent: null
  }, {
    title: 'Accounting',
    slug: 'accounting',
    parent: null
  }, {
    title: 'Morgtage Lending',
    slug: 'mortgage-lending',
    parent: null
  }, {
    title: 'Legal',
    slug: 'legal',
    parent: null
  }, {
    title: 'Financial Planning',
    slug: 'financial-planning',
    parent: null
  })
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});