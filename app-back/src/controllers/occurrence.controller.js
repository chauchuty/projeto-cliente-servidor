import OccurrenceService from "../services/occurrence.service.js"

export function getOcurrences(req, res) {
    OccurrenceService.getAll()
        .then(ocurrences => {
            res.status(200).json(ocurrences)
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error'})
        })   
}

export function newOccurrences(req, res) {
    const data = req.body
    
    if(new Date(data.registered_at) > new Date()){
        return res.status(400).json({ message: 'Data de registro não pode ser maior que a data atual!'})
    }
    OccurrenceService.create(data)
        .then(response => {
            res.status(200).json({ message: 'Ocorrência cadastrada com sucesso!'})
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error'})
        })
}