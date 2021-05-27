import React, { Component } from "react"
import ReactModal from "react-modal"

import BlogForm from "../pages/blog/blog-form"

export default class BlogModal extends Component {
  constructor(props) {
    super(props)

    this.customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '80%',
            borderRadius: '35px 5px'
        },
        overlay: {
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(0deg, rgba(2,0,36,0.5466561624649859) 0%, rgba(158,116,144,0.5550595238095238) 35%, rgba(255,255,255,0.5214460784313726) 100%)'
        }
    }

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
  }

  handleSuccessfulFormSubmission(blog) {
      console.log(this.props)
      console.log(blog)
      this.props.handleSuccessfulNewBlogPost(blog)
  }

  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        handleSuccessfulNewBlogPost={this.handleSuccessfulNewBlogPost}
        isOpen={this.props.modalIsOpen}
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose()
        }}
      >

        <BlogForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        />

      </ReactModal>
    )
  }
}