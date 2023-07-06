import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import env from './env.js'
import { login, signup, logout } from './controllers/app.controller.js'
import { getUsers, getDataUser, updateUser, deleteUser } from './controllers/user.controller.js'
import { isAuth } from './middlewares/app.middleware.js'
import { deleteOccurrence, getOcurrences, getOcurrencesById, newOccurrences, updateOccurrence } from './controllers/occurrence.controller.js'

// Settings
const app = express()
app.use(cors())
app.use(express.json())

// Middleware

// Crie um objeto para rastrear os IPs bloqueados
const blockedIPs = {};

// Middleware
// app.use(rateLimit({
//     windowMs: 60 * 1000,
//     max: 10,
// }))

// Routes
app.post('/login', login)

app.post('/users', signup)

app.post('/logout', logout)

app.get('/users', isAuth, getUsers)

app.put('/users/:id', updateUser)

app.get('/users/data', getDataUser)

app.delete('/users/:id', deleteUser)

app.get('/occurrences', getOcurrences)

app.put('/occurrences/:id', updateOccurrence)

app.delete('/occurrences/:id', deleteOccurrence)

app.get('/occurrences/users/:id', getOcurrencesById)

app.post('/occurrences', newOccurrences)
// Listen

app.listen(env.server.port, () => {
    console.log(`Server listening on port ${env.server.port}`)
})