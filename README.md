# HBoost
Hackathon/Project Booster Template for Quick Config and Development without Conflict

---
## Development Environment (Please/MUST Read)

### Quick Start
```bash
# Install all dependencies (root, backend, frontend)
npm run install:all

# Start both backend and frontend development servers
npm run dev
```
You can still run development env's seperately for each directory.

### Backend (Koa.js + TypeScript)
###### Commands here have to be used in the /backend directory of project 
I spent some time trying to smooth our development env created scripts and smoother flow to avoid conflicts upon development time. Follows almost similar concepts to next.js aka routes automatically define themselves - Ellis

- `npm run create` - Interactive route generator (creates API endpoints) (use this won't create duplicate endpoints. + faster)

- `npm run dev` - Start dev server with hot reload ( no need for closing server )
- `npm run test` - Run tests (not implemented)
- `npm run node:clean` - Clean install dependencies

### Frontend ( NextJS + TypeScript )

Created a smooth component flow almost everything can be made into a component where you seperately export it and utilise types.

Uses next.js default routing. 

---


<a href='https://postimg.cc/n9TryKGP' target='_blank'><img src='https://i.postimg.cc/n9TryKGP/temp-Imageyyr2vk.avif' width='100%' height=200 border='0' alt='temp-Imageyyr2vk'/></a>
