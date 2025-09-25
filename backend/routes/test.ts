import Router from '@koa/router';

const router = new Router();

router.get('/test', (ctx) => {
  ctx.body = 'hello from /test endpoint';
});

export default router;
