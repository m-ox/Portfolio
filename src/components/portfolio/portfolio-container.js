import React, { Component } from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() { // great for performing basic set up -- don't forget to super from the Component class
        super()
        console.log("Portfolio container has rendered")
    }

    portfolioItems() {
        const data =  ["A", "B", "C"] // each column value
        
        return data.map(i => {
            return <PortfolioItem/>
        })
    }

    // state and life cycle hooks need class based component
    render() { // always need render for class based component
        return (
            // JSX looks a lot like html but it isn't~
            <div>
                <h2>Portfolio items go here...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}

// functional and presentation components are the same thing

// dynamic data that can be updated probably would like a class based component, like for forms
// for just simply rendering content, functional components work just fine
// portfolio item will just render items as a functional component
// portfolio-container will be dynamic

// the difference is managing state and having access to life cycle methods