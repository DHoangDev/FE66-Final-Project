import React, { Component } from 'react'

import './About.css';

import Content from './AboutComponents/Content/Content'
import NavFilm from './AboutComponents/NavFilm/NavFilm'

export default function About (props) {
    let{id} = props.match.params
        return (
            <div>
                <Content id={id}/>
                <NavFilm />
            </div>
        )

}
