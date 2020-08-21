import React, { Component } from 'react'
import data from './experiences.json'
import Experience from './Experience/Experience'

class Experiences extends Component {
    render() {
        return (
            <div>
                {data.map((experienceData) => {
                    return (
                        <div key={experienceData.title}>
                            <Experience
                            title={experienceData.title} 
                            company={experienceData.company}
                            date={experienceData.date}
                            description={experienceData.description}/>    
                        </div>
                   );
                })}
            </div>
        )
    }
}

export default Experiences;