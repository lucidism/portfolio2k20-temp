# 2020 portfolio WIP page

a simple GLSL-based one-pager for the time being, until I publish a full digital portfolio. you can currently view the site at [the following address](https://netherwaves.com).

code is made available publicly as reference under the MIT license.

---

## how to use this repository

styles are written in SCSS in `src/sass` and compiled with node-sass; scripts are written in ES6 in `src/js` and compiled with Webpack/Babel. by default, they're not compiled, so you will need to:

1. run `npm i` in the terminal to install all dependencies;
2. run `npm run dev` or `npm run prod` to compile unminified and minified assets respectively.

task files are made available in `tools/tasks`.
