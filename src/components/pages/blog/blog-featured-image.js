import React, { Component } from 'react'

const FeaturedImage = props => {
    if (!props.img) {
        return null
    }

    return (
            <div className="featured-image-wrapper">
                <img src={props.img} />
            </div>
    )
}

export default FeaturedImage