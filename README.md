# LocalBoost Frontend

A React/Vite interface for LocalBoost, a collaborative prototype exploring sales forecasting and investor analytics for small businesses. This repository contains the user-interface work; the [Python/Flask analysis application](https://github.com/dhruv-ar/LocalBoost) is maintained separately.

## What is in this repository

- A gateway with separate investor and business-owner paths
- Login and dashboard screens for both user types
- Investor profile and investment-related views
- Reusable components, styles, and assets under `src/`

## Stack

React, JavaScript, Vite, CSS, and React Router (used by the app routes).

## Project structure

- `src/App.jsx` - application routes and screen composition
- `src/components/` - page and UI components
- `src/styles/` - shared styling
- `public/` - static assets

## Status

This is a team prototype, not a deployed end-to-end product. The frontend and analysis backend are separate repositories. The current app imports `react-router-dom`, but the checked-in `package.json` does not list it yet; that dependency must be added before a clean local install can run the app. The package includes Vite development, build, preview, and ESLint scripts.

## Related repository

[LocalBoost analysis backend](https://github.com/dhruv-ar/LocalBoost)
