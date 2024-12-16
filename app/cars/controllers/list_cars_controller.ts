import Car from '#cars/models/car'
import { HttpContext } from '@adonisjs/core/http'
import { CarListViewModel } from '#cars/view_models/car_list_view_model'

export default class ListCarsController {
  public async index({ inertia, request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const cars = await Car.query().paginate(page, 10)

    const viewModel = CarListViewModel.fromModels(cars.all()).serialize()

    return inertia.render('cars/list', {
      vm: viewModel,
      activePage: page,
    })
  }
}
