import React from 'react'

const Features = () => {
    const FeatureJson = [
        {
            id: 1,
            Feature_delay: '100',
            Features_image: './front-stereo.svg',
            Features_head: 'Front Stereo'
        },
        {
            id: 2,
            Feature_delay: '200',
            Features_image: './interfacehide.svg',
            Features_head: 'Interfaces are Hidden'
        },
        {
            id: 3,
            Feature_delay: '300',
            Features_image: './mobile-app.svg',
            Features_head: 'Mobile App Control'
        },
        {
            id: 4,
            Feature_delay: '400',
            Features_image: './built-gps.svg',
            Features_head: 'Built in GPS anti-theft (optional)'
        },
        {
            id: 5,
            Feature_delay: '500',
            Features_image: './touch-print.svg',
            Features_head: 'Touch Function (Optional)'
        },
    ]
  return (
    <>
        {FeatureJson.map((val)=>(
            <div className='xl:col-span-3 md:col-span-4 col-span-12 m-2 flex items-center justify-center flex-col p-3 bg-transparent transition-all duration-1000 ease-in-out' key={val.id} data-aos="fade-down" data-aos-duration="1000" data-aos-delay={val.Feature_delay}>
                <img src={val.Features_image} className='w-12 invert-[0.1]'/>
                <h6 className='text-center my-2'>{val.Features_head}</h6>
            </div>
        ))}
    </>
  )
}

export default Features