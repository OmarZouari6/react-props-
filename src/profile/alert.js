import React from 'react'

function alert(props) {
    return (
        <div>
        <button onClick={() => props.alertMyInput(`Go My Code`)}>
        Go..
        </button>     
        </div>
    )
}



export default alert
