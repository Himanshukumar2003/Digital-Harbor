import React from 'react'

const Breadcrumb = ({PageName, PageLink}) => {
  return (
    <>
    <div className='bg-Black section-two section'>
        <div className="container">
            <h1 className='mb-3'>{PageName}</h1>
            <ul className='flex items-center gap-x-3'>
                <li><a className='text-Gray'>Home</a></li>
                <li className='text-White'>/</li>
                <li><a className='text-White'>{PageLink}</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb