import React, { Component } from 'react'

import './Home.css';

import CarouselBannel from './HomeComponents/CarouselBannel/CarouselBannel'
import Content from './HomeComponents/Content/Content'

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBannel />
                <Content />
            </div>
        )
    }
}
