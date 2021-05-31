import React, { Component } from "react";
import Axios from 'axios'

import PortfolioItem from './portfolio-item'
import { FaStar } from 'react-icons/fa'

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

    getPortfolioItems(filter = null) {
        Axios
          .get("https://mox.devcamp.space/portfolio/portfolio_items")

          .then( response => {
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                })
            } else {
                this.setState({
                    data: response.data.portfolio_items
                })
            }
          })
          .catch(error => {
            // handle error
            console.log("Response error!", error);
          })
      }

    portfolioItems() {
        
        return this.state.data.map(item => {
            return (
                <PortfolioItem
                key={item.id}
                item={item} />
            )
        })
    }

    handleFilter(filter) {
        if (filter === "clear") {
            this.getPortfolioItems()
        } else {
            this.getPortfolioItems(filter)
    }}


    componentDidMount() {
        this.getPortfolioItems()
    }


    render() {
        if (this.state.isLoading) {
            return (
                <div className="loading">
                    <FaStar className="image" />
                </div>
            )    
        }
        
        return (
                <div className="homepage-wrapper">
                    <div className="filter-links">
                        <button className="btn" onClick={ () => this.handleFilter('python')}>python</button>
                        <button className="btn" onClick={ () => this.handleFilter('js')}>js</button>
                        <button className="btn" onClick={ () => this.handleFilter('clear')}>all</button>
                    </div>

                    <div className="portfolio-items-wrapper">
                        {this.portfolioItems()}
                    </div>
                </div>
        )
    }
}