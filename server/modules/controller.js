const mongoose = require('mongoose');
const { Module } = require('./model');

async function getModules(req, res) {
  const modules = await Module.find({});
  res.send(modules);
}

module.exports = { getModules };
