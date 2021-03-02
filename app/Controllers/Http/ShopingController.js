'use strict'

const Shopping = use('App/Models/Shopping')

class ShopingController {
  async index({ request, response }) {
    const result = await Shopping.all()

    return response.json(result)
  }

  async store({ request, response }) {
    const result = await Shopping.create(request.body.shopping)
    console.log(result)

    return response.json({data: result})
  }

  async show({ request, response }) {
    const result = await Shopping.find(request.params.id)

    return response.json(result)
  }

  async update({ request, response }) {
    const result = await Shopping.query().where('id', request.params.id).update(request.body.shopping)

    return response.json(result)
  }

  async destroy({ request, response }) {
    const result = await Shopping.query().where('id', request.params.id).delete()

    return response.json(result)
  }
}

module.exports = ShopingController
