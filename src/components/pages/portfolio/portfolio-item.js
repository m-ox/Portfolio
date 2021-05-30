import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItemClass: ""
        }
    }

    handleMouseEnter(id) {
        this.setState({portfolioItemClass: `image-blur ${this.alternateBackground(id)} `})
    }

    handleMouseLeave() {
        this.setState({portfolioItemClass: ''})
    }

    alternateBackground(num) {
        if (num % 2 === 1) {
            return 'odd'
        } else {
            return 'even'
        }
    }

    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item

        return (
            <Link to={`/portfolio/${id}`}>
                <div className="portfolio-item-wrapper"
                    onMouseEnter = {() => this.handleMouseEnter(id)}
                    onMouseLeave = {() => this.handleMouseLeave()} 
                >
                    <div
                        className={
                          "portfolio-img-background " + this.state.portfolioItemClass + this.alternateBackground(id)
                        }
                        style={{
                          backgroundImage: "url(" + thumb_image_url + ")"
                        }}
                    />

                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src={logo_url} />
                        </div>
                    
                        <div className="subtitle">{description}</div>
                    </div>
                </div>
            </Link>
        )
    }
}