import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_usv9yud', 'template_lhptxbi', form.current, 'EY2tSR5H1yW8pwjyM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
<form ref={form} onSubmit={sendEmail} className={styles.box2}>
  <input type="name" name="from_name" placeholder="Name" className={styles.input}/>
  <input type="email" name="form_email" placeholder="Email" className={styles.input}/>
  <textarea
    name="message"
    cols="30"
    rows="5"
    placeholder="Tell us more about your needs....."
  />
  <input type="submit" value="Send" className={`scale ${styles.submit}`} />
</form>

  );
};