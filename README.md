This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000/resume](http://localhost:3000/resume) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[**Angular convention**](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)

Commit messages must have types according to commitlint-config-conventional can be:

* build
  * Changes that affect the build system or external dependencies
* chore
  * Routine tasks or updates that don't modify src or test files
* ci
  * Modifications to the CI configuration files and scripts
* docs
  * Changes to documentation, including updates to API documentation or inline code comments.
* feat
  * A new feature specific to the app, such as adding a new component or service.
* fix
  * A bug fix within the application, such as a fix in a component or service.
* perf
  * Performance improvements in the app, such as optimizing a component
* refactor
  * Code changes that enhance the project structure or improve readability without altering functionality
* revert
  * Reverts a previous commit or changes within the app.
* style
  * Changes that do not alter the logic of the code and improves the style of the app.
* test
  * Updates or additions to the unit tests.

For more information, see the [commitlint documentation](https://commitlint.js.org/#/reference-rules?id=type-enum).