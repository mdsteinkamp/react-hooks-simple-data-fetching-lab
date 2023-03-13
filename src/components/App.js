import React, { useEffect, useState } from "react";

function App () {
    const [isLoaded, setIsLoaded] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setImage(data.message)
                setIsLoaded(true)
            })
        
    }, []) 

    if (!isLoaded) {
        return <h3>Loading...</h3>
    }
    else {
        return (

        <div>
            <h1>hello</h1>
            <img src={image} alt="A Random Dog" />

        </div>
    )}
}

export default App