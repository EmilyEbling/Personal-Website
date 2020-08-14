import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="row">
                        <ul class="mainNav jsMainNav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#proj">Projects</a></li>
                            <li><a href="#exp">Experience</a></li>
                            <li><a href="#con">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;