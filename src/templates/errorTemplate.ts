import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class ErrorTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('error', code)
      .description(`errors.New("Error Message")`)
      .replace(`errors.New(\${1:{{expr}}})`, position, true)
      .build()
  }
}

export const build = () => [
  new ErrorTemplate()
]
