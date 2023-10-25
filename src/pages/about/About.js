import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={`section ${styles.container}`} id='about' >
      <h1>Know Me More</h1>
      <div data-aos="fade-up" data-aos-duration="3000">
        <h2>I'm <span className={styles.name}>Muhammad Azeem</span>, a Designer and Developer</h2>
        <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
      </div>
    </div>
  )
}

export default About