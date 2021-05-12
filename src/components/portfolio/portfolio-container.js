import React, { Component } from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() { // great for performing basic set up -- don't forget to super from the Component class
        super()

        this.mockData = [
            {title: "Color Flipper", category: "code"},
            {title: "Tentacles", category: "art"},
            {title: "Diner Menu", category: "code"},
            {title: "Angler Fish", category: "art"},
            {title: "Spirits of the Forest", category: "art"},
            {title: "Moth Hands", category: "art"}
        ]
        
        this.state = {
            pageTitle: "Welcome to my portfolio", // we can now access the class state's pageTitle
            isLoading: false,
            data: this.mockData // each column value
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    portfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"https://www.bing.com"} />
        })
    }

    //handleFilter(filter) {
    //    this.setState({
    //        data: this.state.data.filter(item => {
    //            return item.category === filter;
    //        })
    //    })
    //}

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    resetAll = () => {
        this.setState({
            data: this.mockData
        })
    }

    // state and life cycle hooks need class based component
    render() { // always need render for class based component
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={ () => this.handleFilter('code')}>code</button>
                <button onClick={ () => this.handleFilter('art')}>art</button>
                <button onClick={ () => this.resetAll()}>reset</button>

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