# std-20

This is the STD 20 form built using the [state-template](https://github.com/vollmerr/state-template) package.

## About
This project uses [create-react-app](https://github.com/facebook/create-react-app) as it's foundation, refer to their documentation for issues related to webpack/bundling, extending configurations, etc. 

It also uses the [state-template](https://www.npmjs.com/package/state-template) package as the framework for building [CA State Template](http://template.webstandards.ca.gov/sample/) styled react websites, refer to their documentation for issues related to available components and requirements.

The files for this project are hosted in the Azure Blob Storage, see the `.env.sample`'s `DEPLOY_ACCOUNT` for the account and `DEPLOY_CONTAINER` for the container name.

## Quick Start
1. **Clone the Repo**: `git clone https://github.com/vollmerr/std-20.git`
2. **Setup Environment Variables**: Copy the `.env.sample` to `.env.local`
3. **Start Locally**: `npm run start:local` then navigate to http://localhost:3000.

## Running Locally
Use `npm run start:<ENV>`, where `<ENV>` is the environment target. 
This will start the project at http://localhost:3000.

For example, use `npm run start:prod` to start the application pointing at the production API.

## Building
Use `npm run build:<ENV>`, where `<ENV>` is the environment target. The output will be placed in `/build`. Copy all the contents of this folder to the destination for deploying.

For example, use `npm run build:prod` to build the application pointing at the production API.

## Testing
Use `npm run test` to perform a single run of all files with a test coverage report.

Use `npm run test:watch` to rerun tests on only files changed (by default) after every file save. To update snapshots, use this command and press `u`.

## Deploying
### html
To deploy the html to the wordpress environment open a ticket to the `OCIO ITSM Services/CDT Website Support` group. 

The code in `public/wordpress.html` is the content that should be placed in wordpress.

### javascript + css
This project uses the `bpa-azure` package for deploying to Azure Blob Storage, which relies on environment variables being set. 

To setup the environment for deployment copy the `.env.sample` to `.env.dev` and `.env.prod`, then fill out the corresponding variables

To run deployments, use `npm run deploy` for deploying to dev and `npm run deploy:prod` for production.

### Environment Variables
Environments can be configured using the `.env.<ENV>`, where `<ENV>` is the environment. For example, `.env.local` targets running the application locally. Copy the `.env.sample` to the corresponding environment name to get started.

**create-react-app** requires all environment variables to be prefixed with `REACT_APP_`, for example use `REACT_APP_API_URL` instead of `API_URL`. Environment variables without the prefix will be stripped out.

# Polyfills (IE...)
This project contians the following polyfills for IE 11 support, using polyfill.io:
- Array.from
- Array.prototype.includes
- Object.assign
- Promise
- Number.isNaN

Polyfills are dynamically loaded based off if they are natively supported.

If additional polyfills are needed, go to https://polyfill.io/v3/url-builder/ and create a polyfill bundle using the existing polyfills and attach any additional needed. This will then need to be updated in the `public/wordpress.html` and `public/index.html`.
