import React, { Component } from 'react'

let css = 70
let js = 70
let python = 40

let summary =
    "MERN stack web developer, born and raised in the Rockies.\n\n\
    I first became interested in coding as a kid when I wanted to make my own video games. I started poking around in RPG Maker and later in high school I became interested in CSS and JS when I wanted to style my blogs better than my friends.\n\n\
    During the COVID pandemic I felt it was a great time to pivot and make the most of my time, and decided to enroll full-time in Bottega University. The curriculum helped fill in a lot of gaps from my informal dabblings, and now I have a sturdy foundation on a number of technologies. I currently spend my time working on an array of personal projects and building websites for friends and family."

export default class About extends Component {
    render() {
        return (
            <div className="about-me-content spacer75">
                <div className="left-column">
                    <div className="about-image">
                    </div>
                </div>

                <div className="right-column">
                    <h3>React Developer</h3>
                    <h1 className="about-title">Maudlin Oxalis</h1>

                    <div className="boasts">
                        <p>{summary}</p>
                         </div>

                    <div className="skills-boast">
                        <div className="skill-wrapper">

                            <p>JS</p>
                            <div className="skill-bar">
                                <div className="skills js">{js}%</div>
                            </div>

                            <p>CSS</p>
                            <div className="skill-bar">
                                <div className="skills css">{css}%</div>
                            </div>

                            <p>PY3</p>
                            <div className="skill-bar">
                                <div className="skills py">{python}%</div>
                            </div>

                            

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
