import React from 'react';
import styles from './card.module.css';
const Card = (props) => {
      return (
        <div className={styles.outer}>
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
    );
}

export default Card;