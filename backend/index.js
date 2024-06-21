import express from 'express'
import cors from 'cors'

const server = express()

const users = [
    {
        name: 'Luan',
        age: 20,
    },
]

server.use(express.json()) //Para declarar que vai utilizar Json
server.use(cors()) //Qualquer origem pode acessar meu servidor, se for server especifico, informar o 'http://localhost

server.get('/users', (req, res) => {
    res.json(users)
})

server.post('/users', (req, res) => {
    console.log(req.body)

    const newUser = req.body
    users.push(newUser)

    res.status(201).json(newUser)
})

server.listen({
    port: 5555
})