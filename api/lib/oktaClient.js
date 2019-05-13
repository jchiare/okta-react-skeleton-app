const okta = require('@okta/okta-sdk-nodejs');
const dotenv = require('dotenv');
dotenv.config();

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_API_TOKEN
});

module.exports = client;