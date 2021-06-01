import React, { Component } from 'react'
import axios from "axios"
import { FaEnvelope, FaLock } from 'react-icons/fa'

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
        axios.post("https://api.devcamp.space/sessions",
        {
        // the data parameters to be passed in
            client: {
                email: this.state.email,
                password: this.state.password,
                errorText: ""
            }
        },
        // with credentials necessary for devcamp api session sign ins
        { withCredentials: true }

        // response handling
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth()
            } else {
                console.log(response.data.status)
                this.setState({
                    errorText: "Wrong email or password"
                })
                this.props.handleUnsuccessfulAuth()
            }

        }).catch(error => {
            this.setState({
                errorText: "An API pathing error occured"
            })
            this.props.handleUnsuccessfulAuth()
        })

        // prevent refresh
            event.preventDefault();
        }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }


    render() {
        return (
            <div className="login-form spacer75">

                <h1 style={{textAlign: 'center'}} > WELCOME </h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FaEnvelope />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <FaLock />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="btn-wrapper">
                        <button>
                            Login
                        </button>
                    </div>

                </form>

            </div>
        )
    }
}
