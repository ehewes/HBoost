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
You can also run development environments separately for each directory.

### Backend (Koa.js + TypeScript)
###### Commands here have to be used in the /backend directory of project

This template streamlines development workflows and minimizes conflicts during development. It follows Next.js-style routing concepts where routes are automatically defined.

Backend functionality mirrors Next.js routing. Use `npm run create` to generate dynamic API routes. Currently supports:

- `npm run create` - Interactive route generator (creates API endpoints, prevents duplicates, faster development)
- `npm run dev` - Start dev server with hot reload (no server restart required)
- `npm run test` - Run tests (framework ready for implementation)
- `npm run node:clean` - Clean install dependencies

#### Route Creation Demo
```bash
cd backend
npm run create
# Enter the endpoint (e.g., /chat/work/test): /api/users/profile
# Enter method (GET/POST, default GET): GET
# Output: Created routes/api.ts with GET route /users/profile
```

### Frontend ( NextJS + TypeScript )

Provides a streamlined component architecture where components can be modularized with separate exports and type definitions.

Uses Next.js default routing.

---

*Future updates will include an npx command for easy project initialization/customization and more integrations for hackathons/projects. Ability to turn hackathon projects into scalable applications with ease.*


<a href='https://postimg.cc/n9TryKGP' target='_blank'><img src='https://i.postimg.cc/n9TryKGP/temp-Imageyyr2vk.avif' width='100%' height=200 border='0' alt='temp-Imageyyr2vk'/></a>
