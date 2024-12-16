import Car from '#cars/models/car'
import { CarViewModel } from '#cars/view_models/car_view_model'

export default class ShowCars {
  public async handle(carId: string) {
    const car = await Car.findOrFail(carId)
    return CarViewModel.fromModels(car).serialize()
  }
}
