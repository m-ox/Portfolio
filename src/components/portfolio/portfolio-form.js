import React, { Component } from 'react'
import axios from "axios"

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            category: "unassigned",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    buildForm() {
        let formData = new FormData()

        formData.append("portfolio_item[name]", this.state.name) // the API is going to expect an object - this is a standard looking formData object
        formData.append("portfolio_item[description]", this.state.description)
        formData.append("portfolio_item[category]", this.state.category)
        formData.append("portfolio_item[url]", this.state.url)
        formData.append("portfolio_item[position]", this.state.position)

        return formData
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        axios.post("https://mox.devcamp.space/portfolio/portfolio_items",
                    this.buildForm(),
                    { withCredentials: true })
            .then(response => {console.log("response", response)})
            .catch(error => {console.log("portfolio form handleSubmit error", error)})
        
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Portfolio Form</h1>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <div>
                            <input
                            type="text"
                            name="name"
                            placeholder="Portfolio Item Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Portfolio Item Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />

                        <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        >   
                            <option value="unassigned">Make a selection...</option>
                            <option value="js">JS</option>
                            <option value="python">Python</option>
                            <option value="css">CSS</option>
                        </select>
                    </div>

                    <div>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Write a description..."
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </div>

                </form>
            </div>
        )
    }
}
