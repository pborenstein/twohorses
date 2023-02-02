
module.exports = function (eleventyConfig) {
  return {
    dir: {
      output:   "dist",
      input:    "src",
      includes: "includes", //  These are inside the `input` directory
      data:     "data"
    },
    passthroughFileCopy: true
  }
}
