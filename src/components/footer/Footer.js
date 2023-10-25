import React from 'react'
import styles from './footer.module.css'
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`section ${styles.container}`}>
      <h1>FOLLOW ME</h1>
      <div className={styles.iconDiv}>
        <a href="https://www.linkedin.com/in/muhammad-azeem-azam-9a2663215 " target="_blank" rel="noopener noreferrer">
          <BsLinkedin className={styles.icon} color="green" />
        </a>
        <a href="https://github.com/MUHAMMAD-AZEEM-AZAM" target="_blank" rel="noopener noreferrer">
          <BsGithub className={styles.icon} color='green' />
        </a>
      </div>
      <p>Connect with me for more Information</p>
      {/* <p>Copyright © 2023 <span>Azeem</span>. All Rights Reserved.</p> */}
    </div>
  )
}

export default Footer