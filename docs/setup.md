# Setup

```bash
# pnpm initialize project
pnpm init

# vite - create project (react + typescript)
pnpm create vite@latest . -- --template react-ts

# install react-router-dom
pnpm install react-router-dom --save

# install eslint
pnpm install --save-dev eslint

# install airbnb eslint config + peer dependencies
pnpm install --save-dev eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
# or
pnpx install-peerdeps --dev eslint-config-airbnb

# remove eslint-plugin-react-refresh
pnpm rm eslint-plugin-react-refresh

# install prettier and eslint plugin
pnpm install --save-dev prettier eslint-plugin-prettier

# install rest of devDependencies
pnpm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
```
