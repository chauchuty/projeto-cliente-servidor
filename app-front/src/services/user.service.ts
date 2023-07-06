import axios from 'axios'
import md5 from 'md5'
import User from "../types/user.model";
import env from '../env';

class UserService {

    static async create(user: User) {
        return await axios.post(env.api.url + '/users', {
            ...user,
            password: md5(user.password)
        })
    }

    static async update(user: User, token: string, id: number) {
        return await axios.put(env.api.url + '/users/' + id, {
            ...user,
            password: md5(user.password)
        }, {
            headers: {
                Authorization: token
            }
        })
    }

    static async delete(token: string, id: number) {
        return await axios.delete(env.api.url + '/users/' + id, {
            headers: {
                Authorization: token
            }
        })
    }

    static async getData(token: string) {
        return await axios.get('http://localhost:3000/users/data', {
            headers: {
                Authorization: token
            }
        })
    }
}

export default UserService