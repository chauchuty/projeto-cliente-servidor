import jwt from 'jsonwebtoken'
import env from './../env.js'
import UserService from "../services/user.service.js"
import BlacklistService from '../services/blacklist.service.js'
import { isEmpty, isEmail } from "../utils/functions.utils.js"

export function login(req, res) {
    const { email, password } = req.body

    if (!isEmail(email) || isEmpty(password)) {
        return res.status(401).json({ message: 'Usuário ou senha são requeridos' })
    }

    UserService.getOne({ email: email, password: password})
        .then(user => {
            const token = jwt.sign({ id: user.id }, env.jwt.secret)
            res.status(201).json({ token: token })
        })
        .catch(err => {
            res.status(500).json({ message: 'Email ou senha inválido!' })
        })
}

export function signup(req, res) {
    const { name, email, password } = req.body

    UserService.create({ name: name, email: email, password: password })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `[${err.errors[0].type}] - ${err.errors[0].message}`})
        })
}

export function logout(req, res) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Token requerido!' })
    }

    jwt.verify(token, env.jwt.secret, (err, _) => {
        if (err) {
            console.log(token)
            return res.status(401).json({ message: 'Token inválido!' })
        }

        BlacklistService.create({token: token})
        res.status(200).json({ message: 'Sessão expirada!' })
    })
}