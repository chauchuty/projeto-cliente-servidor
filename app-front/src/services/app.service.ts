import Access from "../types/access.model";
import axios from 'axios'

class AppService {

    static async login(access: Access){
        return await axios.post('http://localhost:3000/login', access)
    }

    static async logout(token: string){
        return await axios.get('http://localhost:3000/logout', {
            headers: {
                Authorization: token
            }
        })
    }
}

export default AppService