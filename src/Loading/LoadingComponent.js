import React from 'react'
import { useSelector } from 'react-redux'
import { LoadingReducer } from '../Redux/reducer/LoadingReducer'
import './LoadingComponent.css'
export default function LoadingComponent(props) {
    const {isLoading} = useSelector(state=>state.LoadingReducer)
    if(isLoading){
    return (
        <div className="bgLoading">
             <img width="75" src='http://localhost:3000/assets/images/loading.gif' alt=""/>
        </div>
    )
    }else{
        return ''
    }
}
 