import Occurrence from "../models/occurrence.model.js"

class OccurrenceService {
    static async getAll(){
        return await Occurrence.findAll()
    }

    static async getByUserId(id){
        return await Occurrence.findAll({
            where: {
                user_id: id
            }
        })
    }

    static async create(data){
        return await Occurrence.create({
            ...data
        })
    }

    static async update(data, id){
        return await Occurrence.update({
            ...data
        }, {
            where: {
                id: data.id || id
            }
        })
    }

    static async delete(id){
        return await Occurrence.destroy({
            where: {
                id: id
            }
        })
    }
}

export default OccurrenceService