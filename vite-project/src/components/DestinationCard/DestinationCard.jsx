import React from 'react'

export default function DestinationCard({title ,imgsrc}) {
  return (
    <div className='destination_card'>
    <div className="destination_card_img">
       <img src={imgsrc} alt="" />
    </div>
    <div className='destination_card_content'>
   <h5>{title}</h5>
    </div>
    </div>
  )
}  
