import React from 'react'
import Breadcrumb from '../component/Breadcrumb';
import SolutionCompo from '../component/SolutionCompo';

const Solutions = () => {
  return (
    <div>
        <Breadcrumb PageName={'Solutions'} PageLink={'solutions'}/>
        <div className='section'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-5'>
                    <SolutionCompo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions