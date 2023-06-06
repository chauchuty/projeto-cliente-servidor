import axios from 'axios'

class OcurrenceService {
    static async getAll(){
        return await axios.get('http://localhost:3000/ocurrences')
    }
}

export default OcurrenceService