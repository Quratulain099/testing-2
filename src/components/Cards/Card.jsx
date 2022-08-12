import React from 'react'
import style from './Card.module.css'

const Card = ({heading,paragraph,imgSource}) => {
  return (
    
        <div className={style.card}>
            <img src={imgSource} alt="not found" />
            <h1>{heading}</h1>
            <p>{paragraph}</p>
           <div className={style.buttons}>
           <button>watch</button>
           </div>
        </div>
  )
}

export default Card