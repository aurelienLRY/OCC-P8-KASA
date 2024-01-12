import React from 'react'
import './styles.scss'

export default function tag({children}) {
  return (
    <div className='tag-container'>{children}</div>
  )
}
