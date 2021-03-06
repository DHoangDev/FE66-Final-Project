import React, { useEffect } from "react"
import { Route } from "react-router-dom"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function HomeTemplate(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <div style={{ backgroundColor: "#1B2631" }}>
                    <Navbar {...propsRoute} />
                    <props.component {...propsRoute} />
                    <Footer />
                </div>
            )
        }} />
    )
}
