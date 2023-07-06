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

    static async getAllById(token: string, id: number) {
        return await axios.get(env.api.url + '/occurrences/users/' + id, {
            headers: {
                Authorization: token
            }
        })
    }

    static async create(ocurrence: Ocurrence, token: string, id: number) {
        return await axios.post(env.api.url + '/occurrences', {
            ...ocurrence,
            km: Number(ocurrence.km),
            occurrence_type: Number(ocurrence.occurrence_type),
            registered_at: ocurrence.registered_at + ':00.000Z',
            user_id : id
        }, {
            headers: {
                Authorization: token
            }
        })
    }

    static async update(ocurrence: Ocurrence, token: string, id: number, user_id: number) {
        return await axios.put(env.api.url + '/occurrences/'+ id, {
            ...ocurrence,
            km: Number(ocurrence.km),
            occurrence_type: Number(ocurrence.occurrence_type),
            registered_at: ocurrence.registered_at + ':00.000Z',
            user_id : user_id
        }, {
            headers: {
                Authorization: token
            }
        })
    }

    static async delete(token: string, id: number) {
        return await axios.delete(env.api.url + '/occurrences/'+ id, {
            headers: {
                Authorization: token
            }
        })
    }
}

export default OccurrenceService