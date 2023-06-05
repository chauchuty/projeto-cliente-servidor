import User from './../models/user.model.js'

class UserService {
    static async create(data) {
        return await User.create({
            name: data.name,
            email: data.email,
            password: data.password
        })
    }

    static async getOne(data) {
        return await User.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        })
    }

    static async getAll(){
        return await User.findAll()
    }

    static async getData(id){
        return await User.findOne({
            where: {
                id: id
            }
        })
    }
}

export default UserService