/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { CorrelationElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const params = elem.getAttribute('data-params') || ''
  return {
    type: 'correlation',
    params,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as CorrelationElement
}

const parseHtmlConf = {
  selector: 'a[data-w-e-type="correlation"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
