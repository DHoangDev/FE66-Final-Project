import React, { Component } from 'react'

import './About.css';

import Content from './AboutComponents/Content/Content'
import NavFilm from './AboutComponents/NavFilm/NavFilm'

export default class About extends Component {
    render() {
        return (
            <div>
                <Content />
                <NavFilm />
            </div>
        )
    }
}
