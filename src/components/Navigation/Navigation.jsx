import React from 'react'
import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={style.Navbar}>
        <div className={style.logo}>
            <h3>Code Champs</h3>
        </div>
        <ul className={style.lists}>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutpage">About</a></li> 
        </ul>
    </div>
  )
}

export default Navigation