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
    const token = req.headers.authorization.split(' ')[1]
    const data = jwt.decode(token, env.jwt.secret)

    if (!data) {
        return res.status(500).json({ message: 'Invalid' })
    }

    UserService.getOneById(data.id)
        .then(response => {
            if (!user.password) {
                user.password = response.dataValues.password
            }
        })
        .catch(err => {
            return res.status(404).json({ message: 'User not found' })
        })
        .finally(() => {
            UserService.update(data.id, user)
                .then(user => {

                    res.status(200).json({
                        ...user.dataValues,
                        message: 'Atualizado com sucesso!'
                    })
                })
                .catch(err => {
                    res.status(500).json({ message: err.message })
                })
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

export function deleteUser(req, res) {
    const token = req.headers.authorization.split(' ')[1]
    const data = jwt.decode(token, env.jwt.secret)

    if (!data) {
        res.status(500).json({ message: 'Invalid' })
    }

    
    UserService.delete(data.id)
        .then(user => {
            return res.status(200).json({message: 'Boas Férias! Jaguarada!'})
        })
        .catch(err => {
            return res.status(501).json(err)
        })
}