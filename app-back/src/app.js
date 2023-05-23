import express from 'express'
import cors from 'cors'
import env from './env.js'
import { login, signup, logout } from './controllers/app.controller.js'
import { getUsers,  } from './controllers/user.controller.js'
import { isAuth } from './middlewares/app.middleware.js'

// Settings
const app = express()
app.use(cors())
app.use(express.json())


// Middlewares


// Routes
app.post('/login', login)

app.post('/signup', signup)

app.get('/logout', logout)

app.get('/users', isAuth, getUsers)

// Listen

app.listen(env.server.port, () => {
    console.log(`Server listening on port ${env.server.port}`)
})