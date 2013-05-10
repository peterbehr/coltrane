// save me as config.js

var config = {};

config.env = {};
config.env.ports = {};
config.env.ports.production = 3000;
config.env.ports.dev = 3000;
config.env.port = process.env.WEB_PORT || config.env.ports.dev;

module.exports = config;