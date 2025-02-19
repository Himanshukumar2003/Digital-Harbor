import React from 'react'
import Breadcrumb from '../component/Breadcrumb'

const DigitalMenu = () => {
  return (
    <>
    <Breadcrumb PageName={"⁠Digital Menu Displays"} PageLink={"digitalmenudisplays"}/>
    <div className='section bg-[url("../circle.webp")] bg-no-repeat bg-contain bg-left'>
        <div className="container">
            <div className='grid grid-cols-12 gap-x-0 lg:gap-x-4 place-items-center'>
                <div className="xl:col-span-7 md:col-span-12 col-span-12" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <div>
                        <div>
                            <h2 className='my-3'>Digital Menu full screen lcd digital signage</h2>
                            <p className='my-3'>Digital menu boards offer several advantages including: easy and quick updates to menus, the ability to highlight specials and new items, improved customer experience through visual appeal, cost-effectiveness by reducing printing needs, potential sales boosts by promoting specific dishes, and maintaining brand consistency across all locations through centralized management.</p>
                        </div>
                        <div className='grid grid-cols-12 mt-10'>
                            <div className='col-span-6 mb-4 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                <img src="./ip65.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                <p className='text-center'><b>Screen Resolutions:</b> 3820 x 2160</p>
                            </div>
                            <div className='col-span-6 mb-4 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                <img src="./quality.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                <p className='text-center'><b>Quality:</b> 4k</p>
                            </div>
                            <div className='col-span-6 mb-4 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                                <img src="./fhd.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                <p className='text-center'>White Temperature Glass</p>
                            </div>
                            <div className='col-span-6 mb-4 xl:mb-0 xl:col-span-3 flex items-center justify-center flex-col' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                                <img src="./plug-and-play.svg" alt="IP65 24/7 use" className='w-12 mb-3'/>
                                <p className='text-center'>Plug and Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-5 md:col-span-12 col-span-12' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                    <img src='./displaymenu.jpeg'/>
                </div>
            </div>
        </div>
    </div>
    <div className='section'>
        <div className="centerhead">
            <h2>Key Benefits of Digital Menu Displays</h2>
        </div>
        <div className="container">
            <div className="grid grid-cols-12 mt-20 place-items-center">
                <div className="xl:col-span-4 md:col-span-12 col-span-12 ">
                    <div>
                        <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            <img src='./flexibility.png' className='w-16 flex xl:items-end items-start mb-3'/>
                            <div>
                                <h6 className='xl:text-right text-left'>Flexibility in updates</h6>
                                <p className='xl:text-right text-left'>Menus can be changed instantly and remotely,
                                allowing for quick adjustments to pricing, availability, or special promotions without the need to reprint physical menus.</p>
                            </div>
                        </div>
                        <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                            <img src='./visual-appeal.png' className='w-16 flex xl:items-end items-start mb-3'/>
                            <div>
                                <h6 className='xl:text-right text-left'>Visual appeal and engagement</h6>
                                <p className='xl:text-right text-left'>Dynamic displays with graphics, animations, and interactive elements can attract customer attention and enhance the ordering experience.</p>
                            </div>
                        </div>
                        <div className='flex xl:items-end items-start xl:justify-end justify-start flex-col mb-8' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                            <img src='./highlighter.png' className='w-16 flex xl:items-end items-start mb-3'/>
                            <div>
                                <h6 className='xl:text-right text-left'>Highlighting specials and new items</h6>
                                <p className='xl:text-right text-left'>Digital menus can effectively showcase new menu items, daily specials, or limited-time offers, potentially boosting sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 md:col-span-12 col-span-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                    <div className='flex items-center justify-center'>
                        <img src='./digitaldisplay.webp' />
                    </div>
                </div>
                <div className="xl:col-span-4 md:col-span-12 col-span-12 ">
                    <div>
                        <div className='flex items-start justify-start flex-col mb-8' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                            <img src='./cost-effective.png' className='w-16 flex items-end mb-3'/>
                            <div>
                                <h6 className='text-left'>Cost-effective</h6>
                                <p className='text-left'>Eliminates the need for constant printing and reprinting of physical menus, saving on paper and labor costs.</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start flex-col mb-8' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <img src='./brand-consistency.png' className='w-16 flex items-end mb-3'/>
                            <div>
                                <h6 className='text-left'>Brand consistency</h6>
                                <p className='text-left'>Centralized management ensures consistent branding and messaging across all locations.</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start flex-col mb-8' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                            <img src='./customer-service.png' className='w-16 flex items-end mb-3'/>
                            <div>
                                <h6 className='text-left'>Improved customer service</h6>
                                <p className='text-left'>Digital menus can provide additional information like dietary restrictions or ingredients, helping customers make informed choices.</p>
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

export default DigitalMenu