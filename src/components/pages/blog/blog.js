import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

import BlogItem from './blog-item'
import BlogModal from '../../modals/blog-modal'

class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            blogModalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this)
        this.onScroll = this.onScroll.bind(this)
        window.addEventListener('scroll', this.onScroll, false)
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleSuccessfulNewBlogPost = this.handleSuccessfulNewBlogPost.bind(this)
    }

    handleSuccessfulNewBlogPost(blog) {
        this.setState({
            blogModalIsOpen: false,
            blogItems: [blog].concat(this.state.blogItems)
          })
        }

    handleModalClose() {
        this.setState({
          blogModalIsOpen: false
        })
      }

    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        })
    }

    onScroll() {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                console.log('scroll bump')
                this.getBlogItems()
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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })

        
        return (
            <div className="blog-container">

                <div className="new-blog-link">
                    <a onClick={this.handleNewBlogClick}>
                        <FaStar className="image" />
                    </a>
                </div>
    
                <BlogModal
                    modalIsOpen={this.state.blogModalIsOpen}
                    handleSuccessfulNewBlogPost={this.handleSuccessfulNewBlogPost}
                    handleModalClose={this.handleModalClose}
                    />

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