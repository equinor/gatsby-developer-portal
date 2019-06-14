// syntax highlighting
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("prismjs/themes/prism-okaidia.css");

try {
  require("@equinor-internal/equinor-font/index.css");
} catch (e) {
  if (process.env.NODE_ENV === "production") {
    throw "font is missing. ";
  }
}
