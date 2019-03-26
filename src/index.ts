declare interface HtmlTagAttr {
  // 为null代表是无值属性，表现形式： <input disabled></input>
  [attrName: string]: string | null
}

declare interface HtmlTag {
  tag?: string
  attrs?: HtmlTagAttr
  children?: HtmlTag[]
  text?: string
  selfClose?: boolean
}

declare interface Options {
  quotes: string
}

function build(
  tagDesc: HtmlTag,
  options: Options = {
    quotes: '"',
  },
) {
  // 如果是文本，直接返回文本
  if (tagDesc.text) {
    return tagDesc.text
  }
  let html = `<${tagDesc.tag}`
  // 处理属性
  if (tagDesc.attrs) {
    const { attrs } = tagDesc
    Object.keys(attrs).forEach((attrName: string) => {
      if (attrs[attrName] === null) {
        // 无值属性，例如：<input disabled></input>
        html += ` ${attrName}`
      } else {
        // 添加属性 例如 value="123"
        html += ` ${attrName}=${options.quotes}${attrs[attrName]}${
          options.quotes
        }`
      }
    })
  }
  // 如果是自闭合标签，则直接返回
  if (tagDesc.selfClose) {
    html += '/>'
    return html
  }
  html += '>'
  if (tagDesc.children) {
    tagDesc.children.forEach((child: HtmlTag) => {
      html += `${build(child)}`
    })
  }
  html += `</${tagDesc.tag}>`
  return html
}

export default build
