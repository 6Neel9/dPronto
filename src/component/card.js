import { useState, useEffect } from 'react';
import axios from 'axios'

function Card() {
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const response = res.data
            setData(response)
        })
            ()


    }, [])
    console.log(data)

    return (
        <div style={{display:'flex' , flexDirection:'column'}} >
            {data.map((val, idx) => {
                return (
                    <div style={{border:"1px solid black" }}>
                        <p key={idx}>{val.id}</p>
                        <p key={idx}>{val.title}</p>
                        <p key={idx}>{val.body}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default Card