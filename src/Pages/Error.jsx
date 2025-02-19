import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section">
        <div className='container'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-5'>
              <img src='./error.svg'/>
            </div>
            <div className="col-span-7">
              <div>
                <h6 className='text-Black'>Oops!!!</h6>
                <h2 className='my-5'>Page 404 Not Found</h2>
                <p className='mb-5'>We're sorry, but the page you are looking for does not exist. It might have been removed, had its name changed, or is temporarily unavailable.</p>
                <button className='circlebtn' onClick={()=>navigate('/')}>Back to Home <FaArrowRightLong  className='circledesign'/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error