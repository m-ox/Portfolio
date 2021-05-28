import React from 'react'
import { Link } from "react-router-dom"
import striptags from "striptags"
import Truncate from "react-truncate"
import ReactHtmlParser from "react-html-parser"
import { FaRegHandPointRight } from 'react-icons/fa'

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    }    = props.blogItem;

    return (
        <div>
            <Link to={`/b/${id}`}>
                <h1>
                    {title}
                </h1>
            </Link>
            <div>
                <Truncate lines={5} ellipsis={
                    <span>
                        ...
                        <br/>
                        <Link to={`/b/${id}`}> <FaRegHandPointRight  className='spacer10' /> Continue to full article </Link>
                    </span>
                    }
                >
                    {striptags(content)}
                </Truncate>
            </div>
        </div>
    )
    
};

export default BlogItem;