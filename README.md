# html-generator

> generate html code

# Feature

- Support nesting tag

# Usage

```
import gene from 'html-generator'

gene({
	tag: 'div',
	attrs: {
		class: 'class1 class2'
	}
})

==>

<div class="class1 class2"></div>
```

# API

**gene(htmlTag: HtmlTag[, opitons: Options])**

```
declare interface HtmlTagAttr {
  // disabled: 'null' => <div disabled></div>
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
  // default: '"'
  quotes: string
}

```

## License

MIT &copy; yangware
