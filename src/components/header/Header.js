import React, { useState } from 'react'
import styles from './header.module.css'
import { AiOutlineMenu } from "react-icons/ai";
function Header() {

  const [display,setDisplay]=useState('none');
 const displayMenu=()=>{
  setDisplay(display==='none'?'block':'none');
var menu=document.getElementById('nav')
menu.style.display=display
  }
  return (
      <div className={`section ${styles.outer}`}>
        <header className={styles.head}>
            <h3 className={`scale ${styles.name}`} data-aos="fade-right" data-aos-duration="1000">Muhammad Azeem</h3>
            <nav className={styles.navBar} id='nav'>
                <ul>
                    <li className='scale'><a href="#home">Home</a></li>
                    <li className='scale'><a href="#services">Services</a></li>
                    <li className='scale'><a href="#about">About</a></li>
                    <li className='scale'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <AiOutlineMenu className={styles.menu} onClick={displayMenu} size='30px'/>
    </div>
  )
}

export default Header