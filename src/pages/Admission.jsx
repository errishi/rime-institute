import React from 'react'
import HeroAdmission from '../components/Admission/HeroAdmission';
import QuickAction from '../components/Admission/QuickAction';
import AdmissionProcess from '../components/Admission/AdmissionProcess';
import ImportantDate from '../components/Admission/ImportantDate';
import FeeStructure from '../components/Admission/FeeStructure';
import ScholarshipFinancialAid from '../components/Admission/ScholarshipFinancialAid';
import AdmissionContact from '../components/Admission/AdmissionContact';

const Admission = () => {
  return (
    <div className='mt-30'>
      <HeroAdmission />
      <QuickAction />
      <AdmissionProcess />
      <ImportantDate />
      <FeeStructure />
      <ScholarshipFinancialAid />
      <AdmissionContact />
    </div>
  )
}

export default Admission;