# Copper Rose Workshop Website

Website for Projects, Freelance, etc

## Building / Running

The site is all front end, so nothing special needs to happen server side.

Requirements:

Using node v26.1.0, yarn 1.22.22

1. Install

    $ yarn install

2. Run local dev server

    $ yarn start

3. Building for deploy

    $ yarn build

Build and Start build a static site in the `dist/` directory.

Sometimes parcel hiccups and doesn't know what's going on so run `yarn clean` and possibly `rm -rf .parcel-cache/`
