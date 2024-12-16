/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ListCarsController = () => import('#cars/controllers/list_cars_controller')
const ShowCarsController = () => import('#cars/controllers/show_cars_controller')
const FetchCarsController = () => import('#cars/controllers/fetch_cars_controller')

router.post('/cars/fetch', [FetchCarsController, 'fetch'])
router.get('/cars/:id', [ShowCarsController, 'show'])
router.get('/cars', [ListCarsController, 'index'])
