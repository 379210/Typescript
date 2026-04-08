# TypeScript App

A simple TypeScript web application running on Node.js with Express.

## Project Structure

```
├── src/
│   └── index.ts       # Main application entry point
├── dist/              # Compiled JavaScript output (generated)
├── package.json       # Node.js dependencies and scripts
├── tsconfig.json      # TypeScript compiler configuration
└── .gitignore
```

## Tech Stack

- **Runtime:** Node.js 20
- **Language:** TypeScript
- **Framework:** Express
- **Port:** 5000

## Development

The application runs via the "Start application" workflow using `ts-node` for direct TypeScript execution in development.

## Scripts

- `npm run dev` — Run in development mode with ts-node
- `npm run build` — Compile TypeScript to JavaScript
- `npm start` — Run compiled output

## Deployment

Configured for autoscale deployment:
- **Build:** `npm run build`
- **Run:** `node dist/index.js`
