import React from 'react';
import styles from './card.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

const Card = (props) => {
    AOS.init();
      return (
        <Tilt>
                  <div className={styles.outer} data-aos="zoom-in" data-aos-duration="2000">
            <div className={styles.imageDiv}>
                <div className={styles.box1} style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className={styles.bottom} style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className={styles.upper}></div>
            </div>
            <div className={styles.contentDiv}>
            <h4>{props.skill}</h4>
            <p>{props.detail}</p>
            {/* <button className={styles.btn}>Hire Now</button> */}
            {/* <faChevronRight/> */}
            </div>
        </div>  
        </Tilt>

    );
}

export default Card;