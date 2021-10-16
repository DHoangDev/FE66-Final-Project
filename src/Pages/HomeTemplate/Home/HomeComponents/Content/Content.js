import React, { Component } from 'react'

import './Content.css';

import MuaVe from './MuaVe/MuaVe';
import CarouselFilm from './CarouselFilm/CarouselFilm'
import XuatChieu from './XuatChieu/XuatChieu'
import TinTuc from './TinTuc/Tintuc'
import AppFilm from './AppFilm/AppFilm'

export default class Content extends Component {
    render() {
        return (
            <div>
                <MuaVe />
                <CarouselFilm />
                <XuatChieu />
                <TinTuc />
                <AppFilm />
            </div>
        )
    }
}
