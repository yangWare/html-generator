export declare interface HtmlTagAttr {
  [attrName: string]: string | null
}
export declare interface HtmlTag {
  tag?: string
  attrs?: HtmlTagAttr
  children?: HtmlTag[]
  text?: string
  selfClose?: boolean
}
export declare interface Options {
  quotes: string
}
declare function build(tagDesc: HtmlTag, options?: Options): string
export default build
