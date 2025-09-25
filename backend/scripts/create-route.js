import readline from 'readline';
import fs from 'fs';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the endpoint (e.g., /chat/work/test): ', (endpoint) => {
  const parts = endpoint.split('/').filter(p => p);
  if (parts.length < 1) {
    console.log('Invalid endpoint format. Use /folder/path');
    rl.close();
    return;
  }

  const folder = parts[0];
  const routePath = '/' + parts.slice(1).join('/');
  const filePath = path.join('routes', `${folder}.ts`);

  rl.question('Enter method (GET/POST, default GET): ', (method) => {
    method = method.toUpperCase() || 'GET';
    if (!['GET', 'POST'].includes(method)) {
      console.log('Invalid method. Use GET or POST.');
      rl.close();
      return;
    }

    const routeExists = fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8').includes(`router.${method.toLowerCase()}('${routePath}'`);

    if (routeExists) {
      console.log(`Route ${method} ${routePath} already exists in ${filePath}`);
      rl.close();
      return;
    }

    let handler;
    if (method === 'GET') {
      handler = `router.get('${routePath}', (ctx) => {\n  ctx.body = 'Response for ${endpoint}';\n});`;
    } else {
      handler = `router.post('${routePath}', (ctx) => {\n  ctx.body = { received: (ctx.request as any).body };\n});`;
    }

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const exportIndex = lines.findIndex(line => line.includes('export default router'));
      lines.splice(exportIndex, 0, handler);
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log(`Added ${method} route ${routePath} to ${filePath}`);
    } else {
      const newContent = `import Router from '@koa/router';

const router = new Router();

${handler}

export default router;
`;
      fs.writeFileSync(filePath, newContent);
      console.log(`Created ${filePath} with ${method} route ${routePath}`);
    }

    rl.close();
  });
});
