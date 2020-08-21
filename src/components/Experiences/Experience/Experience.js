import React from 'react'

const experience = (props) => {
    var list = props.description
    return (
        <div className="Experience">
            <h4>{props.title}</h4>
            <h5>{props.company}</h5>
            <h5>{props.date}</h5>
            <ul>
                {list.map(listitem => (
                    <li key={listitem}>{listitem}</li>
                ))}
            </ul>
        </div>
    )
}

export default experience;