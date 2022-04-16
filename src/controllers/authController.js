const User = require('../models/user');

async function userRegister(body) {
    try {

        const { name, email, password } = body;

        let user = await User.findOne({email});

        if(user) {
            return {error: 'User already exists'}
        }
        
        user = await User.create({ name, email, password });
        
        user.password = undefined;
        
        return user;
    
      } catch (err) {
        return { error: 'An error has occured trying to register the user' };
    }
}

module.exports = userRegister;
