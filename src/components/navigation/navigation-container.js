import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
    constructor() {
        super()

        // no need to set a state rn
    }

    adminLinks() {
        return null
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home 
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">
                            About Me
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact 
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        {false ?
                            <NavLink to="/new-post" activeClassNme="nav-link-active">
                                Add Blog Post
                            </NavLink>
                        :  null }
                    </div>

                </div>



                <div className="right-side">
                    Maudlin Oxalis
                </div>
                
            </div>
        )
    }
}