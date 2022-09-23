'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    password: STRING,
    age: INTEGER,
    avatar: STRING,
  });

  return User;
};

