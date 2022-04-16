const User = require('../models/user');

export default class AuthController {
  async register(req) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      return user;
    } catch (err) {
      return { error: 'An error has occured trying to register the user' };
    }
  }
}