import { useEffect } from 'react'

import SportCard from "./SportCard"

function SportsContainer({ sports, setSports }) {

    useEffect(() => {
        fetch('http://localhost:3001/sports')
        .then((resp) => resp.json())
        .then((data) => setSports(data))
    }, [])

    const displaySports = sports.map((sport) => (
        <SportCard key={sport.id} sport={sport} />
    ))

    return (
        <div>
            { displaySports }
        </div>
    )
}

export default SportsContainer;
