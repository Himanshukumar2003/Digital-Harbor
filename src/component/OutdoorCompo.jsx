import React from 'react'
const OutdoorCompo = () => {
  const OutdoorJson = [
    {
        id:1,
        OutdoorImg: "./ip65-waterproof.webp",
        OutdoorHead: "IP65 Rated Weatherproof Enclosure",
        OutdoorPara: "The outer casing has an IP65 rating which means it keeps out all airborne swarf, dust, and other particles and is protected from any wet weather conditions, broadening the range of possible environments.",
    },
    {
        id:2,
        OutdoorImg: "./built-gps.png",
        OutdoorHead: "Built-in GPS, Anti-theft Enhancement",
        OutdoorPara: "The hardware system has built-in GPS, support remotesound recording, which is convenient to lock thedevice and easily retrieve it when necessary.",
    },
    {
        id:3,
        OutdoorImg: "./long-running.webp",
        OutdoorHead: "Long Running Time",
        OutdoorPara: "The lithium-ion battery revolutionizes the way you can use digital signage. This commercial grade slimline battery solution gives you over 14 hours running time. (environment 0°, the running time will decrease)",
    },
    {
        id:4,
        OutdoorImg: "./battery.webp",
        OutdoorHead: "Charge level indicator",
        OutdoorPara: "This handy indication meter tells you exactly howmuchcharge you have left in your battery for ultimateconvenienve",
    },
    {
        id:5,
        OutdoorImg: "./1500nits.jpg",
        OutdoorHead: "1500 Nits Brightness IPS Panel (Option 700Nits)",
        OutdoorPara: "The high brightness LCD panel used in this display is up to three times brighter than a domestic Signage making it ideal for outdoor spaces.",
    },
    {
        id:6,
        OutdoorImg: "./stylish-robust.webp",
        OutdoorHead: "Stylish Robust Enclosure withsevencolors",
        OutdoorPara: "Seven colors aluminium alloy frame, high-strengthmetalhousing, and front tempered glass panel, provideasolidbacking and guarantee for display operationenvironment and service life.",
    },
    {
        id:7,
        OutdoorImg: "./control-methods.webp",
        OutdoorHead: "Various Control Methods",
        OutdoorPara: "The new design supports mobile APP, USB stick, Ethernet and internet cloud control, allowing you to control the video content with one click.",
    },
    {
        id:8,
        OutdoorImg: "./secure-locker-bar.webp",
        OutdoorHead: "Secure Locking Bar",
        OutdoorPara: "Advanced locking mechanismfor simpler operation, ensuring the stability and safety of the display.",
    },
    {
        id:9,
        OutdoorImg: "./front-speaker.webp",
        OutdoorHead: "Front Stereo Speakers",
        OutdoorPara: "The new design puts the speaker on the front, which greatly improves the sound effect, and uses the metal wire drawing process, with the piano lacquer, which is not only beautiful but also waterproof.",
    },
    {
        id:10,
        OutdoorImg: "./all-interface-hidden.webp",
        OutdoorHead: "All interfaces are hidden",
        OutdoorPara: "The new design hides all the interfaces, whichgreatlyimproves the aesthetics and is more convenient touse",
    }
]
  return (
    <>
      {OutdoorJson.map((val)=>(
        <div key={val.id} className='xl:col-span-4 md:col-span-6 col-span-12 bg-white shadow-DarkShadow p-2 rounded-lg h-full'>
            <img src={val.OutdoorImg} className='h-60 w-full rounded-lg shadow-DarkShadow'/>
            <h6 className='my-3'>{val.OutdoorHead}</h6>
            <p>{val.OutdoorPara}</p>
        </div>
      ))}
    </>
  )
}

export default OutdoorCompo