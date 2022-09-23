const Service = require('egg').Service;

class UserService extends Service {
  // eslint-disable-next-line no-empty-function
  async index() {}

  async createUser(body) {
    try {
      const user = {
        username: body.username,
        password: body.password,
      };
      await this.app.model.User.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = UserService;
