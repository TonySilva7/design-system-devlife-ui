# TS-Config

This package provides quick configuration for your project's TypeScript, including ReactJS.

> Note that you need to have TypeScript installed.

### Installation:
```bash
npm i -D @devlife-ui/ts-config
```

### Settings:
Create a `tsconfig.json` file in the root of your project, and paste this code below. Replace `base.json` with `react.json` for ReactJS projects.
```json
{
   "extends": "@devlife-ui/ts-config/base.json",
   "include": ["src"]
}
```