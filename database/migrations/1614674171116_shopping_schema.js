'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShoppingSchema extends Schema {
  up () {
    this.table('shoppings', (table) => {
      table.date('createddate')
    })
  }

  down () {
    this.table('shoppings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ShoppingSchema
