import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router"

export default function AdminTemplate(props) {

    const login = true;

    // if (!localStorage.getItem(USER_LOGIN)) {
    //     alert('Login Please !');
    //     return <Redirect to="/Login" />
    // }

    if (!login) {
        alert('Login please !')
        return <Redirect to="/Home" />
    }

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <div>
                    <props.component {...propsRoute} />
                </div>
            )
        }} />
    )
}
