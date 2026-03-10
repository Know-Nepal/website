# Know Nepal — Website

> A single source of truth for data and information about Nepal.  
> Open-source, community-driven, and built for everyone.

---

## About

**Know Nepal** is an open-data platform that aggregates and presents accurate, up-to-date information about Nepal in one place. Instead of hunting across hundreds of outdated sources, this website surfaces curated datasets — from tech companies to government portals — in a clean, searchable interface.

The website fetches data from companion repositories in the [Know-Nepal](https://github.com/Know-Nepal) GitHub organization and presents it with fuzzy search, filtering, and responsive layouts.

---

## Features

- **Tech Companies** — Browse and search tech companies in Nepal with details like location, contact info, social profiles, and founding year.
- **Government Websites** — Discover and search official government portals of Nepal.
- **Fuzzy Search** — Powered by [Fuse.js](https://fusejs.io/) for fast, typo-tolerant search on every dataset page.
- **Live Data** — Data is fetched directly from public JSON files in dedicated Know-Nepal data repositories, so it stays fresh without redeployments.
- **Responsive UI** — Built with Tailwind CSS; works across mobile, tablet, and desktop.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Data fetching | [TanStack Query v5](https://tanstack.com/query) + [Axios](https://axios-http.com/) |
| Search | [Fuse.js](https://fusejs.io/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
src/
├── components/
│   └── app/
│       ├── footer.tsx       # Site footer
│       ├── logo.tsx         # Know Nepal logo (mountain SVG + wordmark)
│       └── navbar.tsx       # Sticky navigation bar
├── layouts/
│   └── default.layout.tsx   # Shared page layout (navbar + footer)
├── pages/
│   ├── homepage.tsx         # Landing page with dataset stats
│   ├── tech-companies.tsx   # Tech companies directory
│   └── government-websites.tsx  # Government websites directory
├── types/
│   └── apis.types.ts        # TypeScript interfaces for API responses
└── utils/
    └── apis.ts              # API helper functions (Axios calls)
```

---

## Data Sources

Data is pulled from public JSON files hosted in separate Know-Nepal repositories:

| Dataset | Repository |
|---|---|
| Tech Companies | [`Know-Nepal/tech-companies`](https://github.com/Know-Nepal/tech-companies) |
| Government Websites | [`Know-Nepal/government-websites`](https://github.com/Know-Nepal/government-websites) |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Clone the repository
git clone https://github.com/Know-Nepal/website.git
cd website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Check code formatting with Prettier |
| `npm run format:write` | Auto-format all source files |

---

## Contributing

Contributions are welcome! Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before getting started.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your fork and open a Pull Request

To contribute data (add a company, fix a government website URL, etc.), please open a PR in the relevant data repository instead:
- [Know-Nepal/tech-companies](https://github.com/Know-Nepal/tech-companies)
- [Know-Nepal/government-websites](https://github.com/Know-Nepal/government-websites)

---

## License

[MIT](./LICENSE) © Know Nepal Contributors
