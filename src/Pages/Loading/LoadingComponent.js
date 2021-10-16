import React from 'react'
import { useSelector } from 'react-redux'
import './LoadingComponent.css'
export default function LoadingComponent(props) {
    const {isLoading} = useSelector(state=>state.LoadingReducer)
    if(isLoading){
    return (
        <div className="bgLoading">
             <img width="150" src='http://localhost:3000/assets/images/Globexcs_Loading.gif' alt=""/>
        </div>
    )
    }else{
        return ''
    }
}
 