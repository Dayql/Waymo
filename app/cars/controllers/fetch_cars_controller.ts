import FetchCars from '#cars/actions/fetch_cars'
import { carValidator } from '#cars/validators/car_validator'
import { HttpContext } from '@adonisjs/core/http'

export default class FetchCarsController {
  public async fetch({ response, request }: HttpContext) {
    const fetchCars = new FetchCars()

    const cars = await fetchCars.handle()

    for (const car of cars) {
      const data = await request.validateUsing(carValidator, {
        data: car,
      })

      await fetchCars.storeCar(data)
    }

    return response.ok({
      message: 'Cars fetched and stored successfully!',
    })
  }
}
