import Score from './Score'
export default function StudentItem({ student }) {
    const scores = student.scores
    const scoreItems = scores.map((scores) => <Score scores = { scores }/>)
    // const scoreItems = scores.map((score) => <Score date={ score.date } score={ score.score }/>)
  return (
<>

    <li>
        Name: { student.name }
    </li>
    <li>
        Bio: { student.bio }
    </li>
    <li>
        Scores: { scoreItems }
    </li>
</>
  )
}
