import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import { web,mobile,uiux} from '../../assets'
import Typed from 'typed.js'
import resume from '../../assets/resume.pdf'
import AOS from 'aos';


function Home() {
  AOS.init();
var skills=['Web Developer', 'UI UX designer','Mobile App Developer']
// functonality for typed---------
  const el = React.useRef(null);
  var time=0;
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: skills,
      typeSpeed: 80,
      loop:true,
      cursorChar:'<>'
    });
    return () => {
      typed.destroy();
    };
  }, []);

//functionality for image slider---------
const images=[web,uiux,mobile];
const [currentImageIndex,setCurrentImageIndex]=useState(0);

useEffect(()=>{
  const interval=setInterval(() => {
    setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length)
    // var time=(skills[currentImageIndex].length+1)*80
  },2700);
  return ()=>clearInterval(interval);
},[images])

return (
    <div className={styles.container}id='home' >

        <div className={styles.box1} data-aos="fade-up"
     data-aos-duration="3000">
            <h3>I am</h3>
            <h2 className='scale'>Muhammad Azeem</h2>
            <h3>I am a professional</h3>
            <div className={styles.type} ><h3 ref={el}></h3></div>
            <a href={resume} download='resume.pdf'><button className=''>Download Resume</button></a> 
        </div>
        <div className={styles.box2} >
          
            <img className={styles.image} src={images[currentImageIndex]} alt='services' data-aos="fade-left" data-aos-duration="2000"/>
        </div>
    </div>
  )
}

export default Home