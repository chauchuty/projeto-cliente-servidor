import express from 'express'
import cors from 'cors'
import env from './env.js'
import { register } from './controllers/user.controller.js'

// Settings
const app = express()
app.use(cors())
app.use(express.json())

// Test


// Middlewares


// Routes
app.get('/login', (req, res) => {
    res.json({ test: '123' })
})

app.get('/logout', (req, res) => {

})

app.post('/register', register)

// Listen

app.listen(env.server.port, () => {
    console.log(`Server listening on port ${env.server.port}`)
})