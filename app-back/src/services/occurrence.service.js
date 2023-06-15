import Occurrence from "../models/occurrence.model.js"

class OccurrenceService {
    static async getAll(){
        return await Occurrence.findAll()
    }

    static async create(data){
        return await Occurrence.create({
            ...data
        })
    }
}

export default OccurrenceService