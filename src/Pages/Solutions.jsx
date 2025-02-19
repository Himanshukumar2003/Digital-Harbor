import React from 'react'
import Breadcrumb from '../component/Breadcrumb';
import SolutionCompo from '../component/SolutionCompo';

const Solutions = () => {
  return (
    <div>
        <Breadcrumb PageName={'Solutions'} PageLink={'solutions'}/>
        <div className='section'>
            <div className='container'>
                    <SolutionCompo/>
            </div>
        </div>
    </div>
  )
}

export default Solutions