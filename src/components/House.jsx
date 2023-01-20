// list all houses in gameOfThrones.js, as well as a link to each
import { Link, useParams } from 'react-router-dom'



export default function House(props) {

    const { id } = useParams()
    const house = props.gotData.find((house) => house.id.toString() === id)
    const people = house.people.map((person, i) => {
        return (
            <li key={`person-${i}`}>
                <Link to={`/houses/${id}/members/${person.id}`}>{person.name}</Link>
            </li>
        )
    })

    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
                {/* <Houses house={gameOfThrones} /> */}
            </div>
            <ul className="list">
                {people}
            </ul>
        </div>
    )
}