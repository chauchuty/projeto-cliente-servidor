import axios from 'axios'
import Ocurrence from '../types/ocurrence.model'
import env from '../env'

class OccurrenceService {
    static async getAll(token: string) {
        return await axios.get(env.api.url + '/occurrences', {
            headers: {
                Authorization: token
            }
        })
    }

    static async create(ocurrence: Ocurrence, token: string, id: number) {
        return await axios.post(env.api.url + '/occurrences', {
            ...ocurrence,
            user_id : id
        }, {
            headers: {
                Authorization: token
            }
        })
    }
}

export default OccurrenceService