declare interface HtmlTagAttr {
  [attrName: string]: string | null;
}
declare interface HtmlTag {
  tag?: string;
  attrs?: HtmlTagAttr;
  children?: HtmlTag[];
  text?: string;
  selfClose?: boolean;
}
declare interface Options {
  quotes: string;
}
declare function build(tagDesc: HtmlTag, options?: Options): string
export default build
