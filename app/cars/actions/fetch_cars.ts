import axios from 'axios'
import Car from '#cars/models/car'
import env from '#start/env'

export default class FetchCars {
  public async handle() {
    const apiUrl = `${env.get('API_SERVER')}:${env.get('API_PORT')}/cars`
    const apiKey = env.get('API_KEY')

    await axios.post(
      apiUrl,
      {},
      {
        headers: {
          'app-id': 'demo',
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const response = await axios.get(apiUrl, {
      headers: {
        'app-id': 'demo',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    return response.data
  }

  public async storeCar(data: Record<string, any>) {
    await Car.updateOrCreate({ id: data.id }, data)
  }
}
