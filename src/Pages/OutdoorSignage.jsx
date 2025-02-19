import React, { useEffect, useState } from 'react'
import Breadcrumb from '../component/Breadcrumb';

const OutdoorSignage = () => {
    const OutdoorBenefitJson = [
        {
            id: 1,
            Outdoor_delay: '100',
            OutdoorBenefitHead: "IP65 Rated Weatherproof Enclosure"
        },
        {
            id: 2,
            Outdoor_delay: '200',
            OutdoorBenefitImg: "./live-video.svg",
            OutdoorBenefitHead: "Built-in GPS, Anti-theft Enhancement"
        },
        {
            id: 3,
            Outdoor_delay: '300',
            OutdoorBenefitImg: "./exhibition.svg",
            OutdoorBenefitHead: "Long Running Time"
        },
        {
            id: 4,
            Outdoor_delay: '400',
            OutdoorBenefitImg: "./outdoorsignage.svg",
            OutdoorBenefitHead: "Charge level indicator"
        },
        {
            id: 5,
            Outdoor_delay: '500',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "1500 Nits Brightness IPS Panel (Option 700Nits)"
        },
        {
            id: 6,
            Outdoor_delay: '600',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Stylish Robust Enclosure withsevencolors"
        },
        {
            id: 7,
            Outdoor_delay: '700',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Various Control Methods"
        },
        {
            id: 8,
            Outdoor_delay: '800',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Secure Locking Bar"
        },
        {
            id: 9,
            Outdoor_delay: '900',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "Front Stereo Speakers"
        },
        {
            id: 10,
            Outdoor_delay: '1000',
            OutdoorBenefitImg: "./temporary.svg",
            OutdoorBenefitHead: "All interfaces are hidden"
        }
    ]
  return (
    <>
        <Breadcrumb PageName={'Outdoor Signage'} PageLink={'outdoorsignage'}/>
        <div className='section bg-[url("../circle.webp")] bg-no-repeat bg-contain bg-left'>
            <div className="container">
                <div className='grid grid-cols-12 place-items-center'>
                    <div className="xl:col-span-7 md:col-span-12 col-span-12" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                        <div>
                            <div>
                                <p className='text-Black'><b> 43'Smart Outdoor Signage Portable Screen</b></p>
                                <h2 className='my-3'>New Second Generation</h2>
                                <h5>Performance Improvement</h5>
                                <p className='my-3'>Inheriting the exquisite craftsmanship and advanced special effect soft this product series, the appearance design is more beautiful, the piano paint is matched with the wire drawing process, the ultra-thin frame, and Seven new colors are added.</p>
                                <p><b>Only willing to create a new visual impact for the business.</b></p>
                            </div>
                            <div className='grid grid-cols-12 mt-10 gap-x-2' >
                                <div className='col-span-6 mb-5 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    <img src="./ip65.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>IP65 24/7 use</p>
                                </div>
                                <div className='col-span-6 mb-5 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    <img src="./working-time.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>10 hours long working time</p>
                                </div>
                                <div className='col-span-6 mb-5 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                    <img src="./brightness.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>2500 Nits high brightness</p>
                                </div>
                                <div className='col-span-6 mb-5 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                    <img src="./protection.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>Front Protection</p>
                                </div>
                                <div className='col-span-6 mb-5 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                    <img src="./plug-and-play.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                    <p className='text-center'>Plug and Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-5 md:col-span-12 col-span-12' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                        <img src='./outdoor.webp'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='section bg-[url("./dots.png")] bg-Black'>
            <div className="centerhead">
                <h2 className='text-White'>Outdoor Benefits</h2>
            </div>
            <div className="container">
                <div className="flex items-center justify-center w-full gap-x-5 mt-10 flex-wrap">
                    {OutdoorBenefitJson.map((val)=>(
                        <div className="col-span-2" key={val.id} data-aos="fade-down" data-aos-duration="1000" data-aos-delay={val.Outdoor_delay}>
                            <div className='flex items-center justify-center relative z-10 border border-solid border-White rounded-full py-2 px-3 xl:w-72 xl:h-20 w-60 h-20 mb-3 outdoorbenefits transition-all duration-200 ease-in hover:shadow-DarkShadow'>
                                <p className='text-center text-White'>{val.OutdoorBenefitHead}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='section'>
            <div className="centerhead">
                <h2>New Features</h2>
            </div>
            <div className="container">
                <div className="grid grid-cols-12 mt-20">
                    <div className="xl:col-span-4 col-span-12">
                        <div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                <img src='./front-stereo.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>Front Stereo</h6>
                                    <p className='xl:text-right text-left'>Captivates viewers with high-quality sound, making the content more impactful and memorable.</p>
                                </div>
                            </div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                <img src='./interfacehide.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>Interface are Hidden</h6>
                                    <p className='xl:text-right text-left'>All control interfaces are hidden from public view, enhancing security and manipulation of the signage settings.</p>
                                </div>
                            </div>
                            <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                                <img src='./mobile-app.svg' className='w-16 flex xl:items-end items-start mb-3'/>
                                <div>
                                    <h6 className='xl:text-right text-left'>Mobile App Control</h6>
                                    <p className='xl:text-right text-left'>In today's fast-paced world, the ability to manage operations on the go is not just a luxury; it’s a necessity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                        <div className='flex items-center justify-center'>
                            <img src='./outdoor.webp' />
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div>
                            <div className='flex items-start justify-start flex-col mb-8' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                                <img src='./built-gps.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>Built-in GPS anti-theft (optional) </h6>
                                    <p className='text-left'>Allows real-time location tracking of the digital signage.</p>
                                </div>
                            </div>
                            <div className='flex items-start justify-start flex-col mb-8' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                                <img src='./touch-print.svg' className='w-16 flex items-end mb-3'/>
                                <div>
                                    <h6 className='text-left'>Touch Function (Optional)</h6>
                                    <p className='text-left'>Recognizes multiple touch points simultaneously, allowing for more complex interactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OutdoorSignage