import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "./CarouselBannel.css"

import { bannelAction } from '../../../../../Redux/Action/BannelAction'

export default function CarouselBannel() {

    const { arrBannel } = useSelector(state => state.BannelReducer)
    const dispatch = useDispatch();

    const video = [
        'https://youtu.be/uqJ9u7GSaYM',
        'https://youtu.be/ykBfss-8H4Y',
        'https://youtu.be/NYH2sLid0Zc',
    ]

    useEffect(() => {
        const actionBannel = bannelAction();
        dispatch(actionBannel);
    }, [])

    const renderBannelIndicators = () => {
        return arrBannel.map((value, index) => {
            if (index === 0) {
                return (
                    <li data-target="#BannelCarousel" data-slide-to={index} className="bannel-dotsline s active" key={index}>
                        <b>{value.maBanner}</b>
                    </li>
                )
            } else {
                if (index === arrBannel.length - 1) {
                    return (
                        <li data-target="#BannelCarousel" data-slide-to={index} className="bannel-dotsline e" key={index}>
                            <b>{value.maBanner}</b>
                        </li>
                    )
                } else {
                    return (
                        <li data-target="#BannelCarousel" data-slide-to={index} className="bannel-dotsline m" key={index}>
                            <b>{value.maBanner}</b>
                        </li>
                    )
                }
            }
        })
    }

    const renderBannel = () => {
        return arrBannel.map((value, index) => {
            if (index === 0) {
                return (
                    <div className="carousel-item active" key={index}>
                        <div className="padding-bottom">
                            <a className="venobox" data-vbtype="video" href={video[index]}>
                                <img className="img" src={value.hinhAnh} alt="..." />
                                <button>
                                    <img src="./assets/images/play-video.png" alt="..." />
                                </button>
                                <div className="background-linear" />
                            </a>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="carousel-item" key={index}>
                        <div className="padding-bottom">
                            <a className="venobox" data-vbtype="video" href={video[index]}>
                                <img className="img" src={value.hinhAnh} alt="..." />
                                <button>
                                    <img src="./assets/images/play-video.png" alt="..." />
                                </button>
                                <div className="background-linear" />
                            </a>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div id="BannelCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {renderBannelIndicators()}
            </ol>
            <div className="carousel-inner">
                {renderBannel()}
            </div>
            <a className="carousel-control-prev" href="#BannelCarousel" role="button" data-slide="prev">
                <span className="prev-icon" aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#BannelCarousel" role="button" data-slide="next">
                <span className="next-icon" aria-hidden="true" />
            </a>
        </div>
    )
}