# template-tag-generator

> generate html code

# Feature

- Support nesting tag
- Support vue template

# Usage

```
import gene from 'template-tag-generator'

gene(
  {
	tag: 'div',
	attrs: {
		class: 'class1 class2'
	}
  }
)

==>

<div class="class1 class2"></div>

// demo about nesting tag
{
  tag: 'div',
  children: [
    {
      tag: 'span'
    }
  ]
}

==>

<div><span></span></div>

// demo about vue template
{
  tag: 'custom-template',
  attrs: {
    ':p': 'p',
    '@click': 'handleClick'
  },
  children: [
    {
      tag: 'child-template'
    }
  ]
}

==>

<custom-template :p="p" @click="handleClick">
  <child-template></child-template>
</custom-template>
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
  // plain text, no tags generated
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
