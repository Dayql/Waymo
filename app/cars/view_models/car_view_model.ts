import type Car from '#cars/models/car'

export type CarViewModelSerialized = ReturnType<CarViewModel['serialize']>

export class CarViewModel {
  constructor(private car: Car) {}

  static fromModels(car: Car) {
    return new this(car)
  }

  serialize() {
    return {
      id: this.car.id,
      brand: this.car.brand,
      model: this.car.model,
      year: this.car.year,
      plate: this.car.plate,
      location: {
        lat: this.car.lat,
        lon: this.car.lon,
      },
      maxSpeed: this.car.maxSpeed,
      speed: this.car.speed,
      acceleration: this.car.acceleration,
      mileage: this.car.mileage,
      createdAt: this.car.createdAt?.toISO(),
      updatedAt: this.car.updatedAt?.toISO(),
    }
  }
}
