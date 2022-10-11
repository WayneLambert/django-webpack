# Concepts

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

## What is a webpack Module?

In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:

* An ES2015 `import` statement
* A CommonJS `require()` statement
* An AMD `define` and `require` statement
* An `@import` statement inside of a css/sass/less file
* An image url in a stylesheet `url(...)` or HTML `<img src=...>` file

## Entry

An **entry** point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

## Output

The **output** property tells webpack where to emit the bundles it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.
