import React from 'react'

const skill = (props) => {
    var list = props.skills;
    return (
        <div className="Skill">
        <h3>{props.type}</h3>
        <ul>
                {list.map(listitem => (
                    <li key={listitem}>{listitem}</li>
                ))}
            </ul>
        </div>
    )
}

export default skill;