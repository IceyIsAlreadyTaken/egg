'use strict';


const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/topics.js', () => {
  let ctx;

  beforeEach(() => {
    ctx = app.mockContext();
  });

  describe('create()', () => {
    it('should create failed by accesstoken error', async () => {

      try {
        await ctx.service.topics.create({
          accesstoken: 'hello',
          title: 'title',
          content: 'content',
        });
      } catch (err) {
        assert(err.status === 404);
        // assert(err.message === '错误的accessToken');
        return;
      }
      throw 'should not run here';
    });

    it('should create success', async () => {

      app.mockHttpclient(`${ctx.service.topics.root}/topics`, 'POST', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });

      const id = await ctx.service.topics.create({
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });

      assert(id === '5433d5e4e737cbe96dcef312');

    });


  });
});
