'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function build(
  tagDesc,
  options = {
    quotes: '"',
  },
) {
  if (tagDesc.text) {
    return tagDesc.text
  }
  let html = `<${tagDesc.tag}`
  if (tagDesc.attrs) {
    const { attrs } = tagDesc
    Object.keys(attrs).forEach(attrName => {
      if (attrs[attrName] === null) {
        html += ` ${attrName}`
      } else {
        html += ` ${attrName}=${options.quotes}${attrs[attrName]}${
          options.quotes
        }`
      }
    })
  }
  if (tagDesc.selfClose) {
    html += '/>'
    return html
  }
  html += '>'
  if (tagDesc.children) {
    tagDesc.children.forEach(child => {
      html += `${build(child)}`
    })
  }
  html += `</${tagDesc.tag}>`
  return html
}
exports.default = build
// # sourceMappingURL=index.js.map
