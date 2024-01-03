import React from 'react'
import './styles.scss'

export default function Banner({ url, title, ...props}){
    return (
        <div className="banner">
            <h1 className="banner-title">{title}</h1>
            <img src={url} alt="paysage " className="banner-img" />
        </div>
    )
} 
