import jwt from 'jsonwebtoken'
import env from './../env.js'
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

export function getOcurrencesById(req, res) {
    const token = req.headers.authorization.split(' ')[1]
    const data = jwt.decode(token, env.jwt.secret)
    
    if (!data) {
        res.status(500).json({ message: 'Invalid' })
    }

    OccurrenceService.getByUserId(data.id)
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

export function updateOccurrence(req, res) {
    const data = req.body
    const id = req.params.id

    if(new Date(data.registered_at) > new Date()){
        return res.status(400).json({ message: 'Data de registro não pode ser maior que a data atual!'})
    }

    OccurrenceService.update(data, id)
        .then(response => {
            res.status(200).json({ message: 'Ocorrência cadastrada com sucesso!'})
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error'})
        })
}

export function deleteOccurrence(req, res) {
    const id = req.params.id
    const token = req.headers.authorization.split(' ')[1]
    const data = jwt.decode(token, env.jwt.secret)
    
    if (!data) {
        res.status(500).json({ message: 'Invalid' })
    }

    OccurrenceService.delete(id)
        .then(user => {
            return res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            return res.status(501).json(err)
        })
}