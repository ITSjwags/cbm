# CB Murphy Website
A [Gatsby v2](https://www.gatsbyjs.org/) powered website based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default/).

## Live Website
[cbmurphy.net](https://cbmurphy.net)

## Features
* Styled Components for styling
* Linting for all JS and CSS

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

## Deployment
All the files are on GitHub at: https://github.com/ITSjwags/cbm and hosting is with Bluehost. Here are the steps to making changes and getting them live:

1. Clone this repo
2. Edit the files as you need locally using the available scripts above
3. Run the build command which moves all production ready files into the `public/` directory.
4. Copy/FTP those files into bluehost.
