import Blacklist from "../models/blacklist.model.js"

class BlacklistService {
    static async create(data) {
        return await Blacklist.create({
            token: data.token
        })
    }

    static async findOne(data){
        return await Blacklist.findOne({
            where: {
                token: data.token
            }
        })
    }
}

export default BlacklistService