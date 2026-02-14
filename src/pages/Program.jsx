import React, { useState } from 'react'
import HeroProgram from '../components/Program/HeroProgram';
import Category from '../components/Program/Category';
import ProgramList from '../components/Program/ProgramList';
import Specialize from '../components/Program/Specialize';
import CTA from '../components/Program/CTA';

const Program = () => {
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  return (
    <div className='mt-30'>
      <HeroProgram />
      <Category setFilteredPrograms={setFilteredPrograms} />
      <ProgramList filteredPrograms={filteredPrograms} />
      <Specialize />
      <CTA />
    </div>
  )
}

export default Program;