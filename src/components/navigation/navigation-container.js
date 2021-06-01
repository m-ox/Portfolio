import React, { Component } from 'react'
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import Axios from 'axios'

import { FaSignOutAlt } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    }

    dynamicLink(route, linkText) {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )

        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut() {
        Axios.delete('https://api.devcamp.space/logout', {withCredentials: true})
        .then(response => {
            if (response.status === 200) {
                this.props.history.push('/')
                this.props.handleSuccessfulLogout()
            }
            return response.data
        }).catch( error => {
            console.log("Error signing out", error)
        })
    }

    render() {
        return (
            <div className="nav-wrapper">
    
                <div className="left-side">
    
                    <div className="nav-click" style={{display: 'none'}}>
                        <a href='#'>
                            <AiOutlineMenu />
                        </a>
                    </div>
    
                    <div className="nav-menu">
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
    
                        {this.props.loggedInStatus === "LOGGED_IN" ? (this.dynamicLink("/portfolio-manager", "Portfolio Manager")) : null }
                    </div>
    
                </div>
    
                <div className="right-side">
                    Maudlin Oxalis
                    {this.props.loggedInStatus === 'LOGGED_IN' ? <a onClick={this.handleSignOut}>
                        <FaSignOutAlt className="signout"/>
                    </a> : null }
                </div>
                
            </div>
        )
    }
}

export default withRouter(NavigationComponent)