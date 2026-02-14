import React, { useState } from 'react'
import HeroProgram from '../components/Program/HeroProgram';
import ProgramList from '../components/Program/ProgramList';
import Specialize from '../components/Program/Specialize';
import CTA from '../components/Program/CTA';

const Program = () => {
  return (
    <div className='mt-30'>
      <HeroProgram />
      <ProgramList />
      <Specialize />
      <CTA />
    </div>
  )
}

export default Program;