import axios from 'axios'
import User from "../types/user.model";

class UserService {

    static async create(user: User){
        return await axios.post('http://localhost:3000/signup', user)
    }

    static async update(user: User, token: string){
        return await axios.put('http://localhost:3000/users', {
            ...user
        }, {
            headers: {
                Authorization: token
            }
        })
    }

    static async getData(token: string){
        return await axios.get('http://localhost:3000/users/data', {
            headers: {
                Authorization: token
            }
        })
    }
}

export default UserService