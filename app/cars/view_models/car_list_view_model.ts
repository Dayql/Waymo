import type Car from '#cars/models/car'
import { CarViewModel } from '#cars/view_models/car_view_model'

export type CarListViewModelSerialized = ReturnType<CarListViewModel['serialize']>

export class CarListViewModel {
  constructor(private cars: Car[]) {}

  static fromModels(cars: Car[]) {
    return new this(cars)
  }

  serialize() {
    return {
      cars: this.cars.map((car) => CarViewModel.fromModels(car).serialize()),
    }
  }
}
