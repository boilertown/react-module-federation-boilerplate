<h1 align="center">♨️ React Module Federation Boilerplate</h1>

<div align="center">
  <p>
    A React boilerplate with opinionated setup to help you quickly kickstart projects with module federation.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/react-module-federation-boilerplate?style=flat-square" alt="MIT license" >
</div>

## The Setup

- [React v18][react-url]
- [React Router v6][react-router-url]
- [TypeScript][typescript-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Conventional commit messages with [Commitlint][commitlint-url]
- Monorepo codebase management with [Nx][nx-url]

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm create boilertowns@latest -- -b react-module-federation-boilerplate

  # yarn
  yarn create boilertowns -b react-module-federation-boilerplate

  # pnpm
  pnpm create boilertowns -b react-module-federation-boilerplate

  # bun
  bun create boilertowns/react-module-federation-boilerplate [project-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Run all projects in `apps/*` folder in development environment:

  ```sh
  pnpm dev
  ```

- Build all projects in `apps/*` for to deploy:

  ```sh
  pnpm build
  ```

## Contributing

**react-module-federation-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[react-url]: https://beta.reactjs.org
[react-router-url]: https://reactrouter.com
[typescript-url]: https://www.typescriptlang.org
[babel-url]: https://babeljs.io
[webpack-url]: https://webpack.js.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[nx-url]: https://nx.dev
