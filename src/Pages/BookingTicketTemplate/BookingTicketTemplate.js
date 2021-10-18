import React, { Fragment, useEffect } from "react"
import { Route ,Redirect } from "react-router-dom"
import { USER_LOGIN } from "../../Util/Setting";
import Footer from "../HomeTemplate/Footer/Footer";

export default function BookingMovieTemplate(props) {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/Login'/>
    }
    

    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <Fragment>

                 <props.component {...propsRoute}/>
                 <Footer />
    
                </Fragment>
        }} />
    )
}
