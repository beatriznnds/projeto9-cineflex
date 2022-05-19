import { Link } from "react-router-dom"

export default function Time({ showtimes }) {
    return (
        showtimes.map(time => (
            < Link to={`/assentos/${time.id}`} >
                <div className="time">
                    {time.name}
                </div>
            </Link >
        ))
    )
}