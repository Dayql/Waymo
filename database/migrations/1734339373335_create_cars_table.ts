import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CarsSchema extends BaseSchema {
  protected tableName = 'cars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Identifiant unique
      table.string('id').primary()

      // Informations générales
      table.string('app').notNullable()
      table.string('brand').notNullable()
      table.string('model').notNullable()
      table.integer('year').unsigned().notNullable()
      table.string('plate').notNullable()

      // Localisation
      table.double('lat').notNullable()
      table.double('lon').notNullable()
      table.double('max_lat').nullable()
      table.double('min_lat').nullable()
      table.double('max_lon').nullable()
      table.double('min_lon').nullable()

      // Performances
      table.integer('max_speed').unsigned().nullable()
      table.double('speed').unsigned().nullable()
      table.double('acceleration').nullable()
      table.double('mileage').unsigned().nullable()

      // Dates avec fuseau horaire
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
