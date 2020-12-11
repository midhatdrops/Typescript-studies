const { series, parallel, src, dest } = require("gulp");
const del = require("del");
const broswerify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

function LimparDist() {
  return del(["dist"]);
}

function CopiarHTML() {
  return src("public/**/*").pipe(dest("dist"));
}

function GerarJS() {
  return broswerify({
    basedir: ".",
    entries: ["src/main.ts"],
  })
    .plugin(tsify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(dest("dist"));
}

exports.default = series(LimparDist, parallel(CopiarHTML, GerarJS));
