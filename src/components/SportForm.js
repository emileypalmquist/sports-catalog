import { useState } from "react"

function SportForm({ onAddSport }) {
    const [ name, setName ] = useState("")

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3001/sports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ name })
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((data) => onAddSport(data))
            } else {
                throw Error('something went wrong')
            }
        }).catch(console.log)
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name" >
                Name:
            </label>
            <input 
                id="name" 
                type="text" 
                value={name}
                onChange={handleChange}
            />
            <input type="submit" value="Create Sport" />
        </form>
    )
}

export default SportForm