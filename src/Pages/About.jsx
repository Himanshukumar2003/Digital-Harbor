import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import AboutCompo from '../component/AboutCompo'

const About = () => {
  return (
    <>
      <Breadcrumb PageName={'About'} PageLink={'about'}/>
      <AboutCompo AboutBtn={false}/>
    </>
  )
}

export default About