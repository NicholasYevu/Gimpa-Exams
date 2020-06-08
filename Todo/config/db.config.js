// jshint esversion:6
const dotenv = require('dotenv');
require('dotenv').config({ path: '../'});

module.exports = {
    server: ' sql6009.site4now.net',
    authentication: {
      type: 'default',
      options: {
        userName: ' DB_A2A9C5_db_admin',
        password: ' pass@word123'
      }
    }
  };

