import UserService from './../services/user.service.js'
import jwt from 'jsonwebtoken'
import env from './../env.js'

export function getUsers(req, res) {
    UserService.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error' })
        })
}

export function updateUser(req, res) {
    const user = req.body
    console.log(user)
    const token = req.headers.authorization
    
    const data = jwt.decode(token, env.jwt.secret)

    if (!data) {
        return res.status(500).json({ message: 'Invalid' })
    }

    UserService.update(data.id, user)
        .then(user => {
            res.status(200).json({user: user, message: 'Atualizado com sucesso!'})
        })
        .catch(err => {
            res.status(500).json({err: err})
        })
}

export function getDataUser(req, res) {
    const token = req.headers.authorization

    const data = jwt.decode(token, env.jwt.secret)

    if (!data) {
        res.status(500).json({ message: 'Invalid' })
    }

    UserService.getData(data.id)
        .then(user => {
            return res.status(200).json(user)
        })
        .catch(err => {
            return res.status(200).json(err)
        })
}