import StudentItem from './StudentItem'

export default function Student({ students }) {

  const studentItems = students.map((student, idx) => <StudentItem student={ student } index={ idx } key={ idx } />)

  return (
    <>
      <ul>
          { studentItems }
      </ul>
    </>
  )
}
