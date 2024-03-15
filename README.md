# No Clocks Frontend Development Template

> [!NOTE]
> This project serves the purpose of scaffolding out a boilerplate setup using React, TypeScript, Vite, and our
> preferred development environment tooling for frontend development. This project is not intended to be used as a
> standalone project, but rather as a starting point for new projects.

<!-- BADGES:Start -->

[![Vitest](https://github.com/noclocks/template-react-ts-starter/actions/workflows/vitest.yml/badge.svg)](https://github.com/noclocks/template-react-ts-starter/actions/workflows/vitest.yml)

[![Automate Changelog](https://github.com/noclocks/template-react-ts-starter/actions/workflows/changelog.yml/badge.svg)](https://github.com/noclocks/template-react-ts-starter/actions/workflows/changelog.yml)

<!-- BADGES:End -->

## Tech Stack

This project uses the following technologies:

- [Vite](https://vitejs.dev/) for fast development
- [React](https://reactjs.org/) for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitejs.dev/guide/testing.html) and [JSDOM](https://github.com/jsdom/jsdom) for testing
- [Testing Library](https://testing-library.com/) for testing utilities
- [ESLint](https://eslint.org/) and various [AirBnB ESLint Configurations](https://www.npmjs.com/package/eslint-config-airbnb) for linting
- [Prettier](https://prettier.io/) for code formatting
- [React Router](https://reactrouter.com/) for routing
- [GitHub Actions](./.github/workflows/): for CI/CD and testing automation

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) and [PNPM](https://pnpm.io/)
- [Git](https://git-scm.com/)
- [GitHub CLI](https://cli.github.com/)

### Installation

Create a new local project using the template:

> [!WARNING]
> - [GitHub CLI](https://cli.github.com/) is required to use the `gh repo create` command.
> - Replace `my-new-project` with the name of your project.

```bash
# assuming project name is: my-new-project
gh repo create my-new-project --public --clone --template noclocks/template-react-ts-starter
```

if you do not have the GitHub CLI installed, you can use the following command:

```bash
# assuming project name is: my-new-project
npx degit noclocks/template-react-ts-starter my-new-project
```

Change into the new project directory:

```bash
cd my-new-project
```

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see your application.

### Testing

Run the tests:

```bash
pnpm run test
```

Output:

```bash
> template-react-ts-starter@0.0.1 test X:\github\noclocks\template-react-ts-starter
> vitest

 RUN  v1.4.0 X:/github/noclocks/template-react-ts-starter

 ✓ tests/App.test.tsx (3)
   ✓ App (3)
     ✓ Rendering (3)
       ✓ Shouold render without throwing
       ✓ Renders hello world
       ✓ Renders not found if invalid path

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  19:39:59
   Duration  1.49s (transform 78ms, setup 180ms, collect 322ms, tests 95ms, environment 482ms, prepare 134ms)
```

### Code Coverage

Run the tests with code coverage:

```bash
pnpm run test:coverage
```

Output:

```bash
> template-react-ts-starter@0.0.1 test:coverage X:\github\noclocks\template-react-ts-starter
> vitest run --coverage


 RUN  v1.4.0 X:/github/noclocks/template-react-ts-starter
      Coverage enabled with v8

 ✓ tests/App.test.tsx (3)
   ✓ App (3)
     ✓ Rendering (3)
       ✓ Shouold render without throwing
       ✓ Renders hello world
       ✓ Renders not found if invalid path

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  19:40:41
   Duration  1.64s (transform 106ms, setup 144ms, collect 343ms, tests 104ms, environment 523ms, prepare 138ms)

 % Coverage report from v8
---------------|---------|----------|---------|---------|-------------------
File            | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line \#s
----------------|-----------|------------|-----------|-----------|--------------------
All files       | 100       | 100        | 100       | 100       |
src             | 100       | 100        | 100       | 100       |
App.tsx         | 100       | 100        | 100       | 100       |
main.tsx        | 100       | 100        | 100       | 100       |
src/pages       | 100       | 100        | 100       | 100       |
Home.tsx        | 100       | 100        | 100       | 100       |
NotFound.tsx    | 100       | 100        | 100       | 100       |
--------------- | --------- | ---------- | --------- | --------- | -------------------
```

### Linting

Run the linter:

```bash
pnpm run lint
```

Fix linting issues:

```bash
pnpm run lint:fix
```

### Building

Build the application:

```bash
pnpm run build
```

Serve the production build:

```bash
pnpm run serve
```

***

No Clocks, LLC | 2024
