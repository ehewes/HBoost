import Router from '@koa/router';

const router = new Router();

// Example user routes
router.get('/total_users', (ctx) => {
  ctx.body = 'List of users';
});

export default router;
