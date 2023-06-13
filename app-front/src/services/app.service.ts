import Access from "../types/access.model";
import axios from 'axios'
import env from "../env";

class AppService {

    static async login(access: Access) {
        return await axios.post(env.api.url + '/login', access)
    }

    static async logout(token: string, id: number) {
        return await axios.post(env.api.url + '/logout', {
            id: id
        }, {
            headers: {
                Authorization: token
            }
        })
    }
}

export default AppService