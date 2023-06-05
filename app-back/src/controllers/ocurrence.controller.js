import OcurrenceService from '../services/ocurrence.service.js'

export function getOcurrences(req, res) {
    OcurrenceService.getAll()
        .then(ocurrences => {
            res.status(200).json(ocurrences)
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error'})
        })
    
}