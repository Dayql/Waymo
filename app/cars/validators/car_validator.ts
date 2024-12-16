import vine from '@vinejs/vine'

export const carValidator = vine.compile(
  vine.object({
    id: vine.string(),
    app: vine.string(),
    brand: vine.string(),
    model: vine.string(),
    year: vine.number().min(1900).max(new Date().getFullYear()),
    plate: vine.string(),
    lat: vine.number(),
    lon: vine.number(),
    maxLat: vine.number().optional(),
    minLat: vine.number().optional(),
    maxLon: vine.number().optional(),
    minLon: vine.number().optional(),
    maxSpeed: vine.number().optional(),
    speed: vine.number().optional(),
    acceleration: vine.number().optional(),
    mileage: vine.number().optional(),
    createdAt: vine.date(),
    updatedAt: vine.date(),
  })
)
