/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { CorrelationElement } from '../../src/index'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('a[data-w-e-type="correlation"]')
  })

  it('parse html', () => {
    const params = 'bbb'
    // elem-to-html 产出的 html 格式： <a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="${link}" download="${fileName}">${fileName}</a>
    const elem = document.createElement('a')
    elem.setAttribute('data-w-e-type', 'correlation')
    elem.setAttribute('params', params)

    const attachment = parseHtmlConf.parseElemHtml(elem, [], editor) as CorrelationElement
    expect(attachment.type).toBe('correlation')
    expect(attachment.params).toBe(params)
  })
})
