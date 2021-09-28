import React from 'react'

import './Star.css';

export default function Rating({ value }) {

    const getStar = (value) => {
        switch (value) {
            case 0:
                return ("star far fa-star")
            case 50:
                return ("star fas fa-star-half-alt")
            case 100:
                return ("star fas fa-star")
        }
    }

    const getStars = (value) => {
        switch (parseFloat(value)) {
            case 0:
                return [0, 0, 0, 0, 0]
            case 0.5:
                return [50, 0, 0, 0, 0]
            case 1:
                return [100, 0, 0, 0, 0]
            case 1.5:
                return [100, 50, 0, 0, 0]
            case 2:
                return [100, 100, 0, 0, 0]
            case 2.5:
                return [100, 100, 50, 0, 0]
            case 3:
                return [100, 100, 100, 0, 0]
            case 3.5:
                return [100, 100, 100, 50, 0]
            case 4:
                return [100, 100, 100, 100, 0]
            case 4.5:
                return [100, 100, 100, 100, 50]
            case 5:
                return [100, 100, 100, 100, 100]
        }
    }

    return (
        <span>
            {getStars(value).map((value, index) => (<i className={getStar(value)} key={index}></i>))}
        </span>
    )
}
