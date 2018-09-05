import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate, BaseTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class SwitchTemplate extends BaseTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('switch', code)
      .description('switch statemeent (Go)')
      .replace(`switch \${1:{{expr}}} {\ncase \${2:condition}: \n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }

  canUse (code: string): boolean {
    return true
  }
}

export const build = () => [
  new SwitchTemplate()
]
