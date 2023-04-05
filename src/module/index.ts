/**
 * @description attachment module entry
 * @author wangfupeng
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/editor'
import withCorrelation from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'

const module: Partial<IModuleConf> = {
  editorPlugin: withCorrelation,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
}

export default module
