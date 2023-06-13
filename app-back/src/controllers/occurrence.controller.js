import OccurrenceService from "../services/occurrence.service"

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
    res.status(200).json({ message: 'ok'})
}