module.exports = app => {
    const { router, controller, middleware } = app;
    router.get('/', controller.router.index);
    router.get('/query', controller.router.query);
    router.post('/form', controller.router.post);
    router.get('/params/:id/:name', controller.router.param);
    router.redirect('/home/index', '/', 302);
    router.get('s', '/search', controller.router.redirect);
    router.get('/news', controller.news.list);
    router.get('/middleware', middleware.uppercase(), controller.router.query);
}