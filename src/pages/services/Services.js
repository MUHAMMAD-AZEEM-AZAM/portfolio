import React from 'react'
import styles from './services.module.css'
import Card from '../../components/card/Card'
import { mobile,uiux,web } from '../../assets'
// import {} from "@mui/icons-material"

const Services = () => {
  var cardData = [
    { skill: 'Web Development', image: web, detail: 'Wanted a website for your business' }
    , { skill: 'UI/UX Designer', image: uiux, detail: 'Wanted a design for your web and app' }
    , { skill: 'Mobile Development', image: mobile, detail: 'Wanted to create a mobile application' }]
  return (
    <div className={`section ${styles.container}`} id='services'>
      <h1>My Services</h1>
      <div className={styles.card}>
       {cardData.map((items) => (
        <Card imageUrl={items.image} skill={items.skill} detail={items.detail} />
        ))
      } 
      </div>
      
    </div>
  )
}

export default Services