import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from "react-html-parser"

import FeaturedImage from './blog-featured-image'

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogId: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios
            .get(`https://mox.devcamp.space/portfolio/portfolio_blogs/${this.state.blogId}`)
            .then(response => {
                this.setState({
                    blogItem: response.data.portfolio_blog
                })
            })
            .catch(error => {
                console.log('getBlogItem error', error)
            })
        }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {

        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem


        return (
            <div className="blog-container">
                <div className='content-container'>
                    {<h1> {title} </h1>}

                    <FeaturedImage img={featured_image_url} />

                    <div className="content">
                        <div> {ReactHtmlParser(content)} </div>
                    </div>
                </div>
            </div>
        )
    }
}
