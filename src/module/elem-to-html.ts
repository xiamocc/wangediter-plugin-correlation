/**
 * @description elem to html
 * @author wangfupeng
 */

import { SlateElement } from '@wangeditor/editor'
import { CorrelationElement } from './custom-types'

// 生成 html 的函数
function correlationToHtml(elem: SlateElement, childrenHtml: string): string {
  const { params = '' } = elem as CorrelationElement
  return `<a data-w-e-type="correlation" data-w-e-is-void data-w-e-is-inline data-params="${params}"></a>`
}

// 配置
const conf = {
  type: 'correlation', // 节点 type ，重要！！！
  elemToHtml: correlationToHtml,
}

export default conf
