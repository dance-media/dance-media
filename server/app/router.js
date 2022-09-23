'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // resources对应操作 create(增加  post) destory（删除 delete） update（gengxin put） index（查 get）
  router.resources('user', '/api/user', controller.user);
};
