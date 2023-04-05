/**
 * @description plugin test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import withCorrelation from '../../src/module/plugin'
import { CorrelationElement } from '../../src/index'

describe('attachment plugin', () => {
  const editor = withCorrelation(createEditor())
  const elem: CorrelationElement = {
    type: 'correlation',
    params: 'x',
    children: [{ text: '' }],
  }

  it('isInline', () => {
    expect(editor.isInline(elem)).toBe(true)
  })

  it('isVoid', () => {
    expect(editor.isVoid(elem)).toBe(true)
  })
})
