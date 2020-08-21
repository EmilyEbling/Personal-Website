import React from 'react'

import './Project.css'

const project = (props) => {
    return (
        <div className="Project">
            <h6>{props.name}</h6>
            <p>{props.description}</p>
            <div className="code">
                <i></i>
                <a href={props.link}>Project Code</a>
            </div>
        </div>
    )
}

export default project;