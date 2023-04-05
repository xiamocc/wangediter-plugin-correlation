/**
 * @description download attachment menu test
 * @author wangfupeng
 */

import { SlateEditor, IDomEditor } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import { CorrelationElement } from '../../../src/index'
import withCorrelation from '../../../src/module/plugin'

describe('download attachment menu', () => {
  let editor = withCorrelation(createEditor())

  function getStartLocation(editor: IDomEditor) {
    return SlateEditor.start(editor, [])
  }

  function genCorrelationElem() {
    const attachmentElem: CorrelationElement = {
      type: 'correlation',
      params: 'aaa',
      children: [{ text: '' }],
    }
    return attachmentElem
  }

  beforeEach(() => {
    editor = withCorrelation(createEditor())
  })
})
