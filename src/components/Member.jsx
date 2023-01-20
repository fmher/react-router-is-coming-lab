// provide users with individual house member data
import { useParams } from 'react-router-dom'

export default function Member(props) {

    const { id, memberId } = useParams()
    const house = props.gotData.find(house => house.id.toString() === id)
    const person = house.people.find(person => person.id.toString() === memberId)
    console.log(person)

    return (
        <div className="page">
            <div className="header">
                <h2>{person.name}</h2>
            </div>
            <div className="desc">
                <p>{person.description}</p>
            </div>
        </div>
    )
}