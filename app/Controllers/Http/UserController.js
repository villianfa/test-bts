'use strict'

const User = use('App/Models/User')

class UserController {
  async signup({ auth, request, response }) {
      const user = await User.create(request.body.user)

      let jwt = await auth
      .attempt(request.body.user.email, request.body.user.password)

      const result = {
        email: request.body.user.email,
        token: jwt.token,
        username: request.body.user.username
      }
      return response.json(result)
  }

  async signin({ auth, request, response }) {
    const { email, password } = request.all()

      const loginAttempt = await auth
        .attempt(email, password)

      if (loginAttempt) {
        const user = await User.findBy('email', email)
        return response.json({email: user.email, 'token': loginAttempt.token, username: user.username})
      } else {
        return response.json(error)
      }
  }

  async index({ request, response }) {
    const user = await User.all()

    return response.json(user)
  }
}

module.exports = UserController
