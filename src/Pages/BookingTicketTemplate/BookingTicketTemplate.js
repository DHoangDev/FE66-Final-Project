import React, { Fragment } from "react"
import { Route ,Redirect } from "react-router-dom"
import { USER_LOGIN } from "../../Util/Setting";

export default function BookingMovieTemplate(props) {


    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/Login'/>
    }


    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <Fragment>

                 <props.component {...propsRoute}/>

                </Fragment>
        }} />
    )
}
