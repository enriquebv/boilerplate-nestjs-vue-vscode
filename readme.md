# Full-Stack Boilerplate: NestJS & Vue (TypeScript)

Boilerplate to create full-stack applications using NestJS in the server, Vue in the front-end, and TypeScript as language. Includes config files to help to use it the repo in VSCode (higly recommended).

## How

back-end and front-end are just part of a lerna package, to keep isolated (and easily managed) both aspects of the project. There is a few configurations in each side to keep all working together (like the SPA module for NestJS).

## Why

As full-stack developer, I'm tired of fighting with Eslint, Babel, tsconfig's and more, I just want to prototype fast. NestJS it's great, Vue too, and with TypeScript together are awesome.

## Getting started

Just fork the repo, and execute:

```bash
yarn install
yarn bootstrap
```

That will install all the packages (for root, back-end and front-end).

### Developing back-end

```
yarn back:dev
```

### Developing front-end

```
yarn front:dev
```

### Run production server

```
yarn prod
```
