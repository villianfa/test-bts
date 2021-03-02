'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'UserController.index')
}).prefix('api/users').middleware(['auth'])

Route.group(() => {
  Route.get('/', 'ShopingController.index')
  Route.post('/', 'ShopingController.store')
  Route.get('/:id', 'ShopingController.show')
  Route.put('/:id', 'ShopingController.update')
  Route.delete('/:id', 'ShopingController.destroy')
}).prefix('api/shopping').middleware(['auth'])


Route.post('api/users/signup', 'UserController.signup')
Route.post('api/users/signin', 'UserController.signin')

