import axios from 'axios'
import { useState, useEffect } from 'react'

import './App.css'


const apiLocation = axios.create({ //Faz conexão API
  baseURL: 'http://localhost:5555'
})

function App() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState('') //setNewUsers está armazenando em newUser
  const [age, setAge] = useState('')

  useEffect( () => { //useEffect inicia a função, uma única vez, somente quando programa iniciair
    apiLocation.get('/users').then((response) => { //Caso tudo saia bem (.then) usa a VARIÁVEL RESPONSE
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])

  function novoUsuario() {
    apiLocation.post('/users', { //Enviando age e newUser para /users
      age, 
      name,
    })
    .then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <div>
        <h1>Usuários</h1>
        <ul>
          {users.map(user => ( //Key deve ter um valor que não se repete, substitui um id de identification
            <li key={user.name}>
              Nome: {user.name} - Idade: {user.age}
            </li> //Vai pegar o valor do user e age e colocar no <li>
          ))}
        </ul>

        <h2>Adicionar novo usuário</h2>

        <input placeholder='Nome' onChange={event => setName(event.target.value)}/>  {/*No onChaneg, quando meu input mudar, event ficará armazenado em setNewUser*/}
        <input placeholder='Idade' onChange={event => setAge(event.target.value)}/>

        <button onClick={novoUsuario}>Adicionar Usuário</button>
      </div>
    </>
  )
}

export default App
