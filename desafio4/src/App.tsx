import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api';

export default function App() {
  const [ name, setName ] = useState('')
  const [ phrase, setPhrase ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ time, setTime ] = useState('')
  const [ greeting, setGreeting ] = useState('')

  function getUserName() {
    let userName = prompt('Olá, qual o seu nome?')

    userName ? setName(userName) : setName('')
  }

  function getTime() {
    let now = new Date();

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    setTime(`${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`)

    getMoment(hour)
  }

  function fixZero(time:number) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(getTime, 1000)

  function getMoment(hour:number) {
    if(hour < 12) {
        setGreeting(`Bom dia`)
    } else if(hour < 18) {
        setGreeting(`Boa tarde`)
    } else {
        setGreeting(`Boa noite`)
    }
}

  async function getPhrase() {
    const response = await api.get('random')

    setPhrase(response.data.phrase)
    setAuthor(response.data.author)
  }

  useEffect(() => {
    getTime()
    getUserName()
    getPhrase()
  }, [])

  return (
    <div className="container">
      <section className="content">
            <div className="clock">{ time }</div>
            <div className="greeting">{ greeting } { name }</div>
        </section>
        <footer>
            <p className="phrase">"{ phrase }"</p>
            <span className="author">{ author }</span>
        </footer>
    </div>
  )
}
