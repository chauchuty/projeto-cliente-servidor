import axios from 'axios'
import User from "../types/user.model";
import env from '../env';

class UserService {

    static async create(user: User){
        return await axios.post(env.api.url + '/users', {
            ...user,
            password: btoa(user.password)
        })
    }

    static async update(user: User, token: string, id: number){
        return await axios.put(env.api.url + '/users/'+ id, {
            ...user,
            password: btoa(user.password)
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