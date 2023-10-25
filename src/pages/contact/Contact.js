import React from 'react'
import styles from './contact.module.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from 'react-icons/md'
import {ContactForm} from './ContactForm'
const Contact = () => {
  
  return (
    <div className={`section ${styles.container}`} id='contact'>
      <h1>Get in Touch</h1>
      <div className={styles.outer}>
        <div className={styles.box1} data-aos="fade-left" data-aos-duration="2000">
          <h3>ADDRESS</h3>
          <p>4th Floor, Plot No.22, 145 Askari 10. Lahore Pakistan</p>
          <div className={`scale ${styles.row}`}><BsFillTelephoneFill size={18} color='green' /><h4>03134536101</h4></div>
          <div className={`scale ${styles.row}`}><MdEmail size={20} color='green' /><h4>mazeem@gmail.com</h4></div>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact