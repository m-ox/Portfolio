import React, { Component } from "react"
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'

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
        logo_url: '',
        no_image: ''
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
            id: id || "",
            name: name || "",
            category: category || "",
            description: description || "",
            position: position || "",
            url: url || "",
            thumb_image_url: thumb_image_url || "",
            banner_image_url: banner_image_url || "",
            logo_url: logo_url || ""
        })

        if (!this.state.banner_image_url) {
            this.setState({
                no_image: '<p className="no-image">No image available :( </p>'
            })
        }

      })
      .catch(error => {
        console.log("getportfolioitem error", error)
      });
  }

  render() {

    const bannerStyles = {
        backgroundImage: "url(" + this.state.banner_image_url + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }

    return (
      <div className="portfolio-detail-wrapper spacer75">

        <div className="left-column">
            <div className="title">
                {this.state.name}
            </div>

            <div className="banner-image" style={bannerStyles}>
                <img src={this.state.logo_url} />
                {ReactHtmlParser(this.state.no_image)}
            </div>
        </div>

        <div className="right-column">
        
            <div className="visiting">
                <a href={this.state.url}>Visit this {this.state.category} project!</a>
            </div>

            <div className="details">
                <p>{this.state.description}</p>
            </div>
        
        </div>
        
      </div>
    );
  }
}