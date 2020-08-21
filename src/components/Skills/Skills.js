import React, { Component } from 'react'
import Skill from './Skill/Skill'
import data from './skills.json'

class Skills extends Component {
    render() {
        return (
            <div>
                {data.map((skillData) => {
                    return (
                        <div key={skillData.type}>
                            <Skill
                            type={skillData.type} 
                            skills={skillData.skills}/>    
                        </div>
                   );
                })}
            </div>
        )
    }
}

export default Skills;