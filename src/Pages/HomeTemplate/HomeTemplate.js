import React from "react"
import { Route } from "react-router-dom"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function HomeTemplate(props) {

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <div>
                    <Navbar {...propsRoute} />
                    <props.component {...propsRoute} />
                    <Footer />
                </div>
            )
        }} />
    )
}
