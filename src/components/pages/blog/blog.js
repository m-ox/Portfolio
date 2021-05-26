import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

import BlogItem from './blog-item'

class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true
        }

        this.getBlogItems = this.getBlogItems.bind(this)
        this.activateInfiniteScroll()
    }

    activateInfiniteScroll() {
        window.onscroll = () => {

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.getBlogItems()
            }
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1 
        })

        axios
            .get(
                `https://mox.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
                { withCredentials: true }
            )
            .then( response => {

                if (response.data.portfolio_blogs.length > 0) {
                    console.log("getting", response.data)
                    this.setState({
                        blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                        totalCount: response.data.meta.total_records,
                        isLoading: false
                    })
                    }
                }
            )
            .catch( error => {
                console.log("getBlogItems error", error)}
            )
    }

    componentDidMount() {
        this.getBlogItems()
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })

        
        return (
            <div className="blog-container">
    
                <div className="content-container">
                    {blogRecords}
                    
                </div>

                {this.state.isLoading ? (
                    <div className="loading">
                        <FaStar className="image" />
                    </div>
                ) : null}
                
            </div>
            )
        }
}

export default Blog