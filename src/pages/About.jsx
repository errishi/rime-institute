import React from 'react'
import Hero from '../components/About/Hero';
import IntroSection from '../components/About/IntroSection';
import VisionMission from '../components/About/VisionMission';

const About = () => {
  return (
    <div className='mt-30'>
      <Hero />
      <IntroSection />
      <VisionMission />
    </div>
  )
}

export default About;