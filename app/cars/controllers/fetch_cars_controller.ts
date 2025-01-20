import FetchCars from '#cars/actions/fetch_cars'
import { carValidator } from '#cars/validators/car_validator'
import { HttpContext } from '@adonisjs/core/http'

export default class FetchCarsController {
  public async fetch({ response, request }: HttpContext) {
    const fetchCars = new FetchCars()

    // Récupération des voitures depuis l'API
    const cars = await fetchCars.handle()

    for (const car of cars) {
      const mappedCar = { ...car, id: car._id }
      delete mappedCar._id

      // Validation des données
      const data = await request.validateUsing(carValidator, {
        data: mappedCar,
      })

      // Enregistrement dans la base
      await fetchCars.storeCar(data)
    }

    return response.redirect().toPath('/cars')
  }
}
