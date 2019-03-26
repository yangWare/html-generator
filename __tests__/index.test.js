import test from 'ava'
import build from '../dist'

test('main', t => {
  t.is(typeof build, 'function')
})

test('singleQuote', t => {
  const result = build(
    {
      tag: 'div',
      attrs: {
        class: 'c1 c2',
        style: 'width: 100px; height: 100px;',
      },
      children: [
        {
          tag: 'span',
        },
        {
          text: '哈哈',
        },
        {
          tag: 'img',
          selfClose: true,
        },
      ],
    },
    {
      quotes: "'",
    },
  )
  t.is(
    result,
    `<div class='c1 c2' style='width: 100px; height: 100px;'><span></span>哈哈<img/></div>`,
  )
})

test('doubleQuote', t => {
  const result = build({
    tag: 'div',
    attrs: {
      class: 'c1 c2',
      style: 'width: 100px; height: 100px;',
    },
    children: [
      {
        tag: 'span',
      },
      {
        text: '哈哈',
      },
      {
        tag: 'img',
        selfClose: true,
      },
    ],
  })
  t.is(
    result,
    `<div class="c1 c2" style="width: 100px; height: 100px;"><span></span>哈哈<img/></div>`,
  )
})
