import { useState } from "react"

function SportCard({ sport }) {
    const [ likes, setLikes ] = useState(0)

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <article>
            <h2>
                { sport.name }
            </h2>
            <p>{ likes } likes</p>
            <button onClick={handleClick}>Like</button>
        </article>
    )
}

export default SportCard