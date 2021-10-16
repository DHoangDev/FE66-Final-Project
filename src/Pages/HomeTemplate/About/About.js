import React from 'react'

import './About.css';

import Content from './AboutComponents/Content/Content'

export default function About(props) {

    let { id } = props.match.params

    return (
        <div>
            <Content id={id} />
        </div>
    )

}
