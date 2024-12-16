import Car from '#cars/models/car'
import { HttpContext } from '@adonisjs/core/http'
import { CarViewModel } from '#cars/view_models/car_view_model'

export default class ShowCarController {
  public async show({ params, inertia }: HttpContext) {
    const car = await Car.findOrFail(params.id)

    const viewModel = CarViewModel.fromModels(car).serialize()

    return inertia.render('cars/show', { vm: viewModel })
  }
}
