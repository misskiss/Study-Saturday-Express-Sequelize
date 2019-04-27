'use strict';

const Sequelize = require('sequelize');
const db = require('../db');
// const db = new Sequelize ('postgres://localhost:5432/study-saturdays');


const Student = db.define('student', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

module.exports = Student;
