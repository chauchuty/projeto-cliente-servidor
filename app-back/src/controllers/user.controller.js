import UserService from './../services/user.service.js'

export function register(req, res) {
    const { name, email, password } = req.body

    UserService.create({ name: name, email: email, password: password })
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}