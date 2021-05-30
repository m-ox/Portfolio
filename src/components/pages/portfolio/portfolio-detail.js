import React, { Component } from "react"
import axios from "axios"

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: '',
        name: '',
        category: '',
        description: '',
        position: '',
        url: '',
        thumb_image_url: '',
        banner_image_url: '',
        logo_url: ''
    }

  }

  componentDidMount() {
    this.getPortfolioItem()
  }

  getPortfolioItem() {
    axios
      .get(
        `https://mox.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then(response => {
        const {
            id,
            name,
            category,
            description,
            position,
            url,
            thumb_image_url,
            banner_image_url,
            logo_url
        }    = response.data.portfolio_item
        
        this.setState({
            id,
            name,
            category,
            description,
            position,
            url,
            thumb_image_url,
            banner_image_url,
            logo_url
        })

      })
      .catch(error => {
        console.log("getportfolioitem error", error)
      });
  }

  render() {
    return (
      <div className="portfolio-detail-wrapper spacer75">
        <h2>Portfolio Detail for {this.state.name}</h2>
        <p>{this.state.description}</p>
        <a href={this.state.url}>Visit this {this.state.category} project!</a>
        <img src={this.state.banner_image_url} alt="Pop art project image for {this.state.name}"/>
      </div>
    );
  }
}