import React, { Component } from "react";
import Axios from 'axios'

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this)
        this.getPortfolioItems = this.getPortfolioItems.bind(this)
    }

    getPortfolioItems() {
        Axios
          .get('https://mox.devcamp.space/portfolio/portfolio_items')
          .then( response => {
            // handle success
            console.log("Response success!", response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            // handle error
            console.log("Response error!", error);
          })
      }

    portfolioItems() {
        
        return this.state.data.map(item => {
            console.log("Portfolio Item", item)
            return (
                <PortfolioItem
                key={item.id}
                item={item} />
            )
        })
    }

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

    componentDidMount() {
        this.getPortfolioItems()
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        // this.getPortfolioItems()
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={ () => this.handleFilter('python')}>python</button>
                <button onClick={ () => this.handleFilter('js')}>js</button>
                <button onClick={ () => this.handleFilter('css')}>css</button>

                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>

            </div>
        )
    }
}