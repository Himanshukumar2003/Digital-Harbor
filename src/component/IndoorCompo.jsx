import React from 'react'

const IndoorCompo = () => {
    const IndoorJson = [
        {
            id:1,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "Industrial Grade LCD Screen",
            OutdoorPara: "Adopt high temperature resistant LCD screen and high quality components. LCD screen can work under maximum temperature of 70'c",
        },
        {
            id:2,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "Android / Windows / Stand-alone Os Optional",
            OutdoorPara: "Provide Flexible operation system according to different application",
        },
        {
            id:3,
            OutdoorImg: "./automatic-loop-play.webp",
            OutdoorHead: "Automatic Loop Play",
            OutdoorPara: "Insert the U Disk into the interface, the system will automatically play pictures, advertisments, videos and other pictures.",
        },
        {
            id:4,
            OutdoorImg: "./support-multiple-split.webp",
            OutdoorHead: "Support Multiple Split Screen",
            OutdoorPara: "Support split screen mode through software, save, export, import ADS.",
        },
        {
            id:5,
            OutdoorImg: "./cms.webp",
            OutdoorHead: "CMS (Managment System)",
            OutdoorPara: "Support remote management of many terminals through cloud software, and realizes many tasks such as advertisment publishing, updating and deleting etc.",
        },
        {
            id:6,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "178 Wide Viewing Angle",
            OutdoorPara: "178 Wide Viewing angle both verticle and horiaon-tal viewing, try, to reduce color deviation.",
        },
        {
            id:7,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "Built in Loudspeaker",
            OutdoorPara: "The built-in loudspeaker of advertising machine can enjoy dual channel stereo sound.",
        },
        {
            id:8,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "Rich External Interface (Option)",
            OutdoorPara: "Windows, Android, Stand-alone",
        },
        {
            id:9,
            OutdoorImg: "./lcd-screen.webp",
            OutdoorHead: "Application Scenario",
            OutdoorPara: "widely used in large shopping malls, supermarkets, exhibition, schools, hospitals, stations, shops and other crowded places.",
        }
    ]
  return (
    <>
        {IndoorJson.map((val)=>(
            <div key={val.id} className='xl:col-span-4 md:col-span-6 col-span-12 bg-red-600 shadow-DarkShadow p-2 rounded-lg  h-full'>
                <img src={val.OutdoorImg} className='h-60 w-full rounded-lg shadow-DarkShadow'/>
                <h6 className='my-3'>{val.OutdoorHead}</h6>
                <p>{val.OutdoorPara}</p>
            </div>
        ))}
    </>
  )
}

export default IndoorCompo