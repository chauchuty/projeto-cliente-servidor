import jwt from 'jsonwebtoken'
import env from './../env.js'
import BlacklistService from '../services/blacklist.service.js'

export function isAuth(req, res, next) {
    const token = req.headers.authorization
    console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'Token é requerido' })
    }

    BlacklistService.findOne({ token: token })
        .then((data) => {
            if (data) {
                return res.status(401).json({ message: 'Sessão Expirada por Logout' })
            }

            jwt.verify(token, env.jwt.secret, function (err, data) {
                if (err) {
                    return res.status(401).json({ message: 'Token inválido' })
                }

                next()
            })
        })
}