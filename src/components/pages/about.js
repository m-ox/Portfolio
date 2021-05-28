import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about-me-content">
                <div className="left-column">
                    <div className="about-image">
                    </div>
                </div>

                <div className="right-column">
                    <h3>JavaScript & Python Developer</h3>
                    <h1 className="about-title">Maudlin Oxalis</h1>

                    <div className="boasts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ligula in tincidunt bibendum. Aenean odio neque, dignissim non turpis quis, ultrices vestibulum nunc. Curabitur eget nisl nisi. Pellentesque et consequat magna. Integer non vestibulum tortor. Donec finibus urna sed tristique ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam congue justo sem, et hendrerit dolor elementum a. Vivamus posuere maximus eros ut tempus. Nullam finibus lorem ut leo ullamcorper, non lobortis ipsum vulputate. Aenean rhoncus ac dolor vitae luctus. Donec eu urna laoreet, imperdiet quam eu, euismod massa. Donec elit arcu, dapibus et pellentesque eget, mattis sed metus. Donec ac ornare diam.</p>
                        <p>Pellentesque in urna urna. Morbi fringilla sapien ut efficitur volutpat. Vivamus rhoncus nibh quis tortor varius, et eleifend ex sagittis. Proin consequat, diam quis feugiat consequat, ipsum nisi tincidunt dui, eget ullamcorper turpis sapien quis erat. Nulla vulputate malesuada nisi vitae tristique. Proin fermentum sollicitudin velit imperdiet vehicula. Nullam accumsan sapien eu ullamcorper cursus. Nam nec lectus ut ante facilisis dictum. Pellentesque auctor volutpat eleifend. Cras sollicitudin eleifend felis. Vestibulum et maximus erat.</p>
                    </div>

                    <div className="skills-boast">
                        <div className="skill-wrapper">
                            <p>CSS</p>
                            <div className="skill-bar">
                                <div className="skills css">40%</div>
                            </div>

                            <p>Python</p>
                            <div className="skill-bar">
                                <div className="skills py">30%</div>
                            </div>

                            <p>Javscript</p>
                            <div className="skill-bar">
                                <div className="skills js">30%</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
