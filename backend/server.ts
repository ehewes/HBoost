import koa from "koa";
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import fs from 'fs';
import path from 'path';

async function startServer() {
  const app = new koa();
  const router = new Router();

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

  // Dynamic Route Loader
  // Automatic Route Creation Example ( best practice )
  // 1. Run `npm run create` to create a new route interactively
  // 2. The route will be automatically loaded and its prefix will be given based on the filename

  // Manual Route Creation example
  // For the next person reading this: to create a route follow instructions below
  // 1. Create a new file in the routes directory, e.g., routes/example.ts
  // 2. Use test.ts template to create your route
  // 3. The route will be automatically loaded and its prefix will be given based on the filename
  // Similar to nextJs routing
  // Trying to create a clean development environment to avoid conflicts where we can all develop independently.
  
  const routers = [];
  const routesPath = path.join(process.cwd(), 'routes');
  const routeFiles = fs.readdirSync(routesPath).filter(file => file.endsWith('.ts'));

  for (const file of routeFiles) {
    const routeName = path.parse(file).name;
    const module = await import('./routes/' + routeName + '.ts');
    const routeRouter = module.default;
    routeRouter.prefix(`/${routeName}`);
    routers.push(routeRouter);
  }

  routers.forEach(r => {
    app.use(r.routes());
    app.use(r.allowedMethods());
  });

  app.use(async (ctx) => {
    ctx.body = "Unknown endpoint";
  });

  app.listen(process.env.PORT || 5001, () => {
    console.log(`Server is running on port ${process.env.PORT || 5001}`);
  });
}

startServer();
