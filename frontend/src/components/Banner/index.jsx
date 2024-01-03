import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default function Banner({ url, title, ...props}){
    return (
        <div className="banner">
            <h1 className="banner-title">{title}</h1>
            <img src={url} alt="paysage " className="banner-img" />
        </div>
    )
} 


Banner.propTypes = {
url : PropTypes.string.isRequired,
title: PropTypes.string
}

Banner.defaultProps = {
title: ''
}