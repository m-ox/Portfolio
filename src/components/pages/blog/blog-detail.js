import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from "react-html-parser"

import BlogForm from '../blog/blog-form'
import FeaturedImage from './blog-featured-image'

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        }

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this)
    }

    handleFeaturedImageDelete() {
        this.setState({
            blogItem: {
                featured_image_url: ''
            }
        });
    };

    handleEditClick() {
        this.setState({ editMode: true })
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
        } = this.state.blogItem;

        const contentManager = () => {
          if (this.state.editMode) {
            return (
              <BlogForm
                editMode={this.state.editMode}
                blog={this.state.blogItem}
                handleFeaturedImageDelete={this.handleFeaturedImageDelete}  
              />
            );
          } else {
            return (
              <div className="content-container">
                <h1 onClick={this.handleEditClick}>{title}</h1>

                <FeaturedImage img={featured_image_url} />

                <div className="content">{ReactHtmlParser(content)}</div>
              </div>
            );
          }
        };

        return <div className="blog-container">{contentManager()}</div>;
    }
}
