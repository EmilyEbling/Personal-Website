import React, { Component } from 'react'
import Project from './Project/Project'
import data from './projects.json'

class Projects extends Component {
    render() {
        return (
            <div>
               {data.map((projectData) => {
                   return (
                        <div key={projectData.name}>
                            <Project
                            name={projectData.name} 
                            description={projectData.description}
                            link={projectData.link}/>    
                        </div>
                   );
               })}
            </div>
        )
    }
}

export default Projects;