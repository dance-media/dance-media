const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    try {
      const body = this.ctx.request.body;
      console.log(body);
      await this.ctx.service.user.createUser(body);
      this.ctx.body = {
        code: 200,
        msg: 'success',
      };
    } catch (error) {
      this.ctx.body = {
        code: -1,
        msg: 'failed',
      };
    }
  }
}

module.exports = UserController;
