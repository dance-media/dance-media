/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663853327197_9706';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.jwt = {
    secret: 'iostream',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'test',
    username: 'root',
    password: 'root12345',
    timezone: '+08:00',
  };

  config.multipart = {
    fileSize: 300 * 1000 * 1000, // 设置上传限制为300M
  };
  config.security = {
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
    },
    domainWhiteList: [
      '*',
    ], // 配置白名单
  };

  return {
    ...config,
    ...userConfig,
  };
};
