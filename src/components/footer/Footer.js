import React from 'react'
import styles from './footer.module.css'
import { BsLinkedin,BsGithub,BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`section ${styles.container}`}>
        <h1>FOLLOW ME</h1>
          <div className={styles.iconDiv}>
           <BsLinkedin className='scale' color='green'/>
          <BsGithub className='scale' color='green'/>
          <BsFacebook className='scale' color='green'/></div>
        <p>Copyright © 2023 <span>Azeem</span>. All Rights Reserved.</p>
    </div>
  )
}

export default Footer