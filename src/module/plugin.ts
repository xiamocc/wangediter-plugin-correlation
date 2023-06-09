/**
 * @description correlation plugin
 * @author wangfupeng
 */

import { DomEditor, IDomEditor } from '@wangeditor/editor'

function withCorrelation<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'correlation') {
      return true
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'correlation') {
      return true
    }

    return isVoid(elem)
  }

  return newEditor
}

export default withCorrelation
