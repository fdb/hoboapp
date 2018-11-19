const mongoose = require('mongoose');
const { Module } = require('./model');

async function getModules(req, res) {
  const modules = await Module.find({});
  res.send(modules);
}

async function createModule(req, res) {
  const moduleData = req.body;
  const newModule = await new Module(moduleData).save();
  res.send(newModule);
}

module.exports = { getModules, createModule };
