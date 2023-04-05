/**
 * @description elem to html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { CorrelationElement } from '../../src/index'

describe('attachment elem-to-html', () => {
  const fileName = 'xxx.zip'
  const link = 'https://pan.baidu.com/'
  const attachmentElem: CorrelationElement = {
    type: 'correlation',
    params: 'aaa',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('attachment')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(attachmentElem, '')
    expect(html).toBe(
      `<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="${link}" download="${fileName}">${fileName}</a>`
    )
  })
})
