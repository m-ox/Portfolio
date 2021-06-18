import React, { Component } from 'react'

let css = 40
let js = 30
let python = 30

let summary =
    "Montanan web developer, born and raised in the mountains.\n\n\
    I first became interested in coding as a kid when I wanted to make my own video games. I started with learning RPG Maker logic and later in high school I became interested in CSS/JS when I wanted to style my blogs better than my friends.\n\n\
    During the COVID pandemic, I wanted to make the most out of a lot of down time, and decided to enroll full-time in Bottega University for fullstack development. The curriculum helped fill in a lot of gaps from my informal studies, and now I have a sturdy foundation on a number of technologies. I have since taken to independent study and am learning the MERN stack."

export default class About extends Component {
    render() {
        return (
            <div className="about-me-content spacer75">
                <div className="left-column">
                    <div className="about-image">
                    </div>
                </div>

                <div className="right-column">
                    <h3>JavaScript & Python Developer</h3>
                    <h1 className="about-title">Maudlin Oxalis</h1>

                    <div className="boasts">
                        <p>{summary}</p>
                         </div>

                    <div className="skills-boast">
                        <div className="skill-wrapper">

                            <p>Javscript</p>
                            <div className="skill-bar">
                                <div className="skills js">{js}%</div>
                            </div>

                            <p>Python</p>
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
