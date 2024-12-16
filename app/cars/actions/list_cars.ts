import Car from '#cars/models/car'
import { CarListViewModel } from '#cars/view_models/car_list_view_model'

export default class ListCars {
  public async handle() {
    const cars = await Car.all()
    return CarListViewModel.fromModels(cars).serialize()
  }
}
