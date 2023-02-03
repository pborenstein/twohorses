
module.exports = function (eleventyConfig) {

  const markdownIt              = require('markdown-it')


  eleventyConfig.addPassthroughCopy("src/img")

  const md =  markdownIt({  html: true,
                            breaks: false,
                            linkify: true,
                            typographer: true }).disable('code');


  eleventyConfig.setLibrary("md", md)

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
