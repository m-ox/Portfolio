import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="contact-me-content spacer75">
                <div className="left-column">
                    <div className="contact-wrapper">
                        <h1>Get In Touch</h1>
                        <a className="email" href="mailto:maudlin.oxalis@gmail.com">maudlin.oxalis@gmail.com</a>
                        <p className="phone">555 555 5555</p>
                        <a className="linky" target="_blank" href="https://www.linkedin.com/in/maudlin-oxalis-47762511a/">LinkedIn</a>
                        <a className="linky" target="_blank" href="https://github.com/m-ox">GitHub</a>
                        <a className="linky" target="_blank" href="https://www.instagram.com/ifyouwanttofindmeyouwill/">Instagram
                            <span className="linky-sub">(if you're into that)</span>
                        </a>
                    </div>
                </div>

                <div className="right-column" />
            </div>
        )
    }
}
