import React, { Component } from 'react'
import { Redirect } from "react-router"

export default class Admin extends Component {

    static login = false;

    render() {
        if (!this.login) {
            alert('Login please !')
            return <Redirect to="/Home" />
        }

        return (
            <div>
                This is Admin
            </div>
        )
    }
}
