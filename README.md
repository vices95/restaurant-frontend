This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Resources

For GraphQL API access, [Apollo Client](https://www.apollographql.com/) is used along with [GraphQL WS](https://the-guild.dev/graphql/ws) for subscriptions. For type generation, [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/) is used.

For styles, [Tailwind CSS](https://tailwindcss.com/) is used.

For forms, [React Hook Form](https://react-hook-form.com/) togheter with [Zod](https://zod.dev/) for validation.

For consistant code style [Prettier](https://prettier.io/) and [Husky](https://typicode.github.io/husky/).

## Anotations

We have to move to onData: see the full error text at https://go.apollo.dev/c/err#%7B%22version%22%3A%223.12.2%22%2C%22message%22%3A62%2C%22args%22%3A%5B%5D%7D
'onSubscriptionData' is deprecated and will be removed in a future major version. Please use the 'onData' option instead.
