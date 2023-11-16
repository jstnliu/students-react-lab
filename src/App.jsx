import { useState } from 'react'
import Students from './Student'
import './App.css'

const initialStudents = [
  {
    name: 'Joe Mama',
    bio: 'Master of insults, specializes in "Yo Mama" jokes.',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  }, 
  {
    name: 'Roger Fetarer',
    bio: 'Conniseur of cheese, often mistaken for a tennis icon for some reason.',
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Lob Ross', 
    bio: 'He makes basketball look like art.', 
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  },
  {
    name: 'Chonk Norris',
    bio:'All he knows is Texas Roundhouse Steaks, baby.',
    scores: [
      {
        date: '2018-6-11',
        score: 62 
      },
      {
        date: '2018-3-17',
        score: 21
      },
      {
        date: '2018-2-28',
        score: 70
      }
    ]
  }
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  return (
    <>
      <h1>Students List</h1>
      <Students students = {students} />
    </>
  )
}

export default App
