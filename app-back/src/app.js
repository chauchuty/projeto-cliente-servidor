import express from 'express'
import cors from 'cors'
import env from './env.js'
import { login, signup, logout } from './controllers/app.controller.js'
import { getUsers, getDataUser, updateUser } from './controllers/user.controller.js'
import { isAuth } from './middlewares/app.middleware.js'
import { getOcurrences, newOccurrences } from './controllers/occurrence.controller.js'

// Settings
const app = express()
app.use(cors())
app.use(express.json())


// Middlewares


// Routes
app.post('/login', login)

app.post('/users', signup)

app.post('/logout', logout)

app.get('/users', isAuth, getUsers)

app.put('/users/:id', updateUser)

app.get('/users/data', getDataUser)

app.get('/occurrences', getOcurrences)

app.post('/occurrences', newOccurrences)
// Listen

app.listen(env.server.port, () => {
    console.log(`Server listening on port ${env.server.port}`)
})