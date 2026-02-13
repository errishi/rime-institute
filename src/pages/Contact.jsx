import React from 'react'
import HeroContact from '../components/Contact/HeroContact';
import CardInfo from '../components/Contact/CardInfo';
import ContactForm from '../components/Contact/ContactForm';
import CTA from '../components/Contact/CTA';

const Contact = () => {
  return (
    <div className='mt-30'>
      <HeroContact />
      <CardInfo />
      <ContactForm />
      <CTA />
    </div>
  )
}

export default Contact;