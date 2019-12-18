const Controller = require('egg').Controller;


class RouterController extends Controller {
    async index () {
        this.ctx.body = 'hello egg';
    }
    async query () {
        this.ctx.validate({ name: 'string' });
        const name = this.ctx.query.name || 'default name';
        this.ctx.body = `query name: ${name}`;
    }

    async param () {
        this.ctx.body = `user: id is ${this.ctx.params.id},name is ${this.ctx.params.name}`;
    }

    async post () {
        this.ctx.body = `request body: ${JSON.stringify(this.ctx.request.body)}`
    }

    async redirect () {
        const type = this.ctx.query.type;
        const keyword = this.ctx.query.q || 'nodejs';

        if (type === 'bing') {
            this.ctx.redirect(`http://cn.bing.com?q=${keyword}`);
        } else {
            this.ctx.redirect(`http://www.baidu.com?q=${keyword}`);
        }
    }
}

module.exports = RouterController;