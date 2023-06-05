import Ocurrence from '../models/occurrence.model.js'

class OcurrenceService {
    static async getAll(){
        return await Ocurrence.findAll()
    }
}

export default OcurrenceService