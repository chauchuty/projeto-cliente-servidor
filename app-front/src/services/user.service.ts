import axios from 'axios'
import User from "../types/user.model";

class UserService {

    static async create(user: User){
        return await axios.post('http://localhost:3000/signup', user)
    }
}

export default UserService