import React, { Component } from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() { // great for performing basic set up -- don't forget to super from the Component class
        super()
        
        this.state = {
            pageTitle: "Welcome to my portfolio", // we can now access the class state's pageTitle
            data: [
                {title: "A"},
                {title: "B"},
                {title: "C"}
            ] // each column value
        }
    }

    portfolioItems() {
              
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />
        })
    }

    // state and life cycle hooks need class based component
    render() { // always need render for class based component
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
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