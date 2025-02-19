import React from 'react'
import Breadcrumb from '../component/Breadcrumb'

const Work = () => {
    const ClientMaping = [
        {
            id:1,
            clientdelay: "100",
            Clientlogo: "./client/client1.webp"
        },
        {
            id:2,
            clientdelay: "200",
            Clientlogo: "./client/client2.webp"
        },
        {
            id:3,
            clientdelay: "300",
            Clientlogo: "./client/client3.webp"
        },
        {
            id:4,
            clientdelay: "400",
            Clientlogo: "./client/client4.webp"
        },
        {
            id:5,
            clientdelay: "500",
            Clientlogo: "./client/client5.webp"
        },
        {
            id:6,
            clientdelay: "600",
            Clientlogo: "./client/client6.webp"
        },
        {
            id:7,
            clientdelay: "700",
            Clientlogo: "./client/client7.webp"
        },
    ]
    const WorkMaping = [
        {
            id:1,
            workdelay: "100",
            WorkImg: "./work/work1.webp"
        },
        {
            id:2,
            workdelay: "200",
            WorkImg: "./work/work2.webp"
        },
        {
            id:3,
            workdelay: "300",
            WorkImg: "./work/work3.webp"
        },
        {
            id:4,
            workdelay: "400",
            WorkImg: "./work/work4.webp"
        },
        {
            id:5,
            workdelay: "500",
            WorkImg: "./work/work5.webp"
        },
        {
            id:6,
            workdelay: "600",
            WorkImg: "./work/work6.webp"
        }
    ]
  return (
    <>
        <Breadcrumb PageName={'Recent Work'} PageLink={'recent-work'} />
        <div className='section'>
            <div className='container'>
                <div className="grid grid-cols-12">
                    {WorkMaping.map((val)=>(
                        <div key={val.id} className="col-span-12 md:col-span-4 lg:col-span-4  my-2 mx-2" data-aos="fade-right"
                        data-aos-delay={val.workdelay} >
                            <div className='flex items-center justify-center rounded-2xl overflow-hidden'><img className='w-full rounded-2xl scale-100 transition-all duration-300 ease-linear hover:scale-125 hover:blur-[1px]' src={val.WorkImg} alt="" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='container'>
                    <h3 className='mb-3 text-red-600'>Our Clients</h3>
                <div className="flex items-center justify-center md:justify-start flex-wrap gap-5 w-auto">
                    {ClientMaping.map((val)=>(
                        <div key={val.id} className="w-auto lg:w-[140px] object-cover">
                            <div className='' data-aos="fade-right"
                            data-aos-delay={val.clientdelay}><img className='w-40 mx-auto' src={val.Clientlogo} alt="" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Work