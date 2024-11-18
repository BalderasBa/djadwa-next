# Djadwa

Welcome to Djadwa website.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.


## Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/BalderasBa/djadwa-next.git
```

2. **Navigate to the project directory:**
```bash
   cd djadwa
```

3. **Install the dependencies:**
```bash
   pnpm install
```

4. **Start the development server:**
```bash
   pnpm dev
```


The application should now be running on `http://localhost:3009`.

## Running Tests

```bash
pnpm test
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-vitest&project-name=with-vitest&repository-name=with-vitest)


## Folder Structure
```
djadwa/
├── __tests__/
├── .husky/
├── .next/
├── app/ 
├── ├── [locale]/
│   ├── ├── page
│   ├── ├── layout
│   ├── ├── providers
│   ├── ├── (auth)/
│   ├── ├── (servises)/
├── components/
│   ├── common/
│   ├── header/
│   ├── footer/
│   ├── ui/
├── config/
├── data/
├── lib/
├── messages/
├── pages/
├── public/
├── schemas/
├── styles/
├── types/
├── .prettierrc.json
├── .commitlintrc.json
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vitest.config.ts
```
