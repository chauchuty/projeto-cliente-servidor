import User from './../models/user.model.js'

class UserService {
    static async create(data){
        return await User.create({
            name: data.name,
            email: data.email,
            password: data.password
        })
    }
}

export default UserService