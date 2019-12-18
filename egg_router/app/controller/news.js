const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list () {
        const ctx = this.ctx;
        const newsList = [
            { id: 1, title: 'news 1', url: '/news/1' },
            { id: 2, title: 'news 2', url: '/news/2' },
        ];
        await ctx.render('news/list.tpl', { list: newsList, title: 'news list' });
    }
}

module.exports = NewsController;