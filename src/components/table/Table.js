import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.tempate'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onClick() {
    console.log('Click')
  }

  onMousedown() {
    console.log('MouseDown')
  }
}
