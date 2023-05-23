import UserService from './../services/user.service.js'

export function getUsers(req, res) {
    UserService.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: 'Interval Server Error'})
        })
    
}