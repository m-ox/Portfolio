import React, { Component } from 'react'

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
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> :  null }
            </div>
        )
    }
}