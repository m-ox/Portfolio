import React, { Component } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const PortfolioSidebarList = (props) => {

    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>

                <div className="text-content">
                    <div className="title">{portfolioItem.name}</div>
                    
                    <div className="description">{portfolioItem.description}</div>

                    <div className="actions">
                        <a className="editIcon" onClick={() => props.handleEditClick(portfolioItem)}>
                            <FaEdit />
                        </a>

                        <a className="deleteIcon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                            <FaTrashAlt />
                        </a>
                    </div>
                    
                </div>
            </div>
        )
    })

    return (
        <div className="portfolio-sidebar-list-wrapper">
            {portfolioList}
        </div>
    )
}

export default PortfolioSidebarList