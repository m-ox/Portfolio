import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
    }

    getBlogItems() {
        axios
            .get(
                "https://mox.devcamp.space/portfolio/portfolio_blogs",
                { withCredentials: true }
            )
            .then( response => {
                this.setState({
                    blogItems: response.data.portfolio_blogs
                })
                console.log("Blog items", this.state.blogItems)}
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
            return <h1>{blogItem.title}</h1>
        })

        return (
            <div>
                {blogRecords}
            </div>
            )
        }
}

export default Blog