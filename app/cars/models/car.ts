import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare app: string

  @column()
  declare brand: string

  @column()
  declare model: string

  @column()
  declare year: number

  @column()
  declare plate: string

  @column()
  declare lat: number

  @column()
  declare lon: number

  @column()
  declare maxLat: number | null

  @column()
  declare minLat: number | null

  @column()
  declare maxLon: number | null

  @column()
  declare minLon: number | null

  @column()
  declare maxSpeed: number | null

  @column()
  declare speed: number

  @column()
  declare acceleration: number

  @column()
  declare mileage: number

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt: DateTime | null
}
