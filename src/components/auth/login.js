import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log('handle submit', this.state.email, this.state.password)
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="login-form">

                <h1> WELCOME </h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email goes here"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password goes here"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                <div>
                    <button>
                        Login
                    </button>
                </div>

                </form>

            </div>
        )
    }
}
