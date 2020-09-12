# 2020 portfolio WIP page

a simple GLSL-based one-pager for the time being, until I publish a full digital portfolio. you can currently view the site at [the following address](https://netherwaves.com).
code is made available publicly as reference under the MIT license.

## how to use this repository
styles are written in SCSS in `src/sass` and compiled with node-sass; scripts are written in ES6 in `src/js` and compiled with Webpack/Babel. by default, they're not compiled, so you will need to:

1. run `npm i` in the terminal to install all dependencies;
2. run `npm run dev` or `npm run prod` to compile unminified and minified assets respectively.

compiled assets will automatically be generated in the `dist/` folder, where all other static assets can be found.
task files can be found in `tools/tasks`.

## in regard to fonts
this website uses [Gelion Medium](https://www.myfonts.com/fonts/letter-omega/gelion) and [Object Sans Regular](https://pangrampangram.com/products/object-sans), both of which I have properly licensed for web usage. however, the former shouldn't be readily accessible to the public, and thus it was not uploaded to this repository. therefore, if you wish to port this website, you will need to replace the fonts declared in `src/scss/fonts.scss` with your own, given that you have proper rights to them.
