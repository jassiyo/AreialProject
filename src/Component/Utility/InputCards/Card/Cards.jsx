import React from 'react'
import style from './Cards.module.css'
const Cards = ({className, children}) => {
  return (
    <article className={`${style.card} ${className}`}>
            {children}
    </article>
  )
}

export default Cards