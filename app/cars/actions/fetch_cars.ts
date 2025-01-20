import axios from 'axios'
import Car from '#cars/models/car'
import env from '#start/env'

export default class FetchCars {
  public async handle() {
    const apiUrl = `${env.get('TEST')}:${env.get('API_PORT')}/cars`
    const apiKey = env.get('API_KEY')

    // Génération des voitures
    await axios.post(
      apiUrl,
      {},
      {
        headers: {
          'app-id': apiKey,
          'Content-Type': 'application/json',
        },
      }
    )

    // Récupération des voitures
    const response = await axios.get(apiUrl, {
      headers: {
        'app-id': apiKey,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  }

  public async storeCar(data: Record<string, any>) {
    // Ajout ou mise à jour de la voiture dans la base de données
    await Car.updateOrCreate(
      { id: data.id },
      {
        id: data.id,
        app: data.app,
        brand: data.brand,
        model: data.model,
        year: data.year,
        plate: data.plate,
        lat: data.lat,
        lon: data.lon,
        maxLat: data.maxLat || null,
        minLat: data.minLat || null,
        maxLon: data.maxLon || null,
        minLon: data.minLon || null,
        maxSpeed: data.maxSpeed || null,
        speed: data.speed || 0,
        acceleration: data.acceleration || 0,
        mileage: data.mileage || 0,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      }
    )
  }
}
