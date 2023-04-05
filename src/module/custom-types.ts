/**
 * @description correlation element
 * @author wangfupeng
 */

type EmptyText = {
  text: ''
}

export type CorrelationElement = {
  type: 'correlation'
  params: string
  children: EmptyText[]
}

export type ParamsElement = {
  targetTableName: string
  targetColumn: string
  sourceColumnValue: string | number
}
