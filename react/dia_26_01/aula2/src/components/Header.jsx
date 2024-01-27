import React from 'react'
import style from './Header.module.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className={style.cabecalho}>
        <img src={logo} alt="logo" />
        <strong>hello world</strong>
        <p>lorem ipsum dolor sit amet</p>
    </header>
  )
}

export default Header;