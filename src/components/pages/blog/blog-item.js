import React from 'react'
import { Link } from "react-router-dom"
import striptags from "striptags"
import Truncate from "react-truncate"
import { FaRegHandPointRight, FaTrash } from 'react-icons/fa'

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url,
        loggedInStatus
    }    = props.blogItem;

    console.log(loggedInStatus)

    return (
        <div>
                <h1>
                    <Link to={`/b/${id}`}>
                        {title}
                    </Link>

                    {loggedInStatus === "LOGGED_IN" ?
                    <a onClick={() => props.handleDeleteClick(props.blogItem) }>
                        <FaTrash className="blog-delete" />
                    </a> : null}
                </h1>


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