import React from 'react'
import DestinationCard from '../DestinationCard/DestinationCard'
import "../../styles/components/destination/Destination.css"
export default function Destination() {
    const destination_data = [
        {id: 1, title: "Santorini Beach", imgsrc:"https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727708436~exp=1727712036~hmac=8d8f24fb530b03c546a1d8ee24fdd4347da891540a6e52c603cb7380ac87a0fb&w=996" },
        {id: 1, title: "Santorini Beach",imgsrc:"https://img.freepik.com/free-photo/hawaii-beach-landscape-with-ocean-view_23-2151794943.jpg?t=st=1727796863~exp=1727800463~hmac=5df8d2eaad7bb3c0b1529eaa46d1ff70cc5ada363894ab397a296e2399e2b656&w=826" },
        {id: 1, title: "Santorini Beach",imgsrc:"https://img.freepik.com/premium-photo/sunset-mountains-with-sun-setting-them_1327010-3514.jpg?w=740" },
        {id: 1, title: "Santorini Beach",imgsrc:"https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727708436~exp=1727712036~hmac=8d8f24fb530b03c546a1d8ee24fdd4347da891540a6e52c603cb7380ac87a0fb&w=996" },
        {id: 1, title: "Santorini Beach", imgsrc:"https://img.freepik.com/free-photo/hawaii-beach-landscape-with-ocean-view_23-2151794943.jpg?t=st=1727796863~exp=1727800463~hmac=5df8d2eaad7bb3c0b1529eaa46d1ff70cc5ada363894ab397a296e2399e2b656&w=826"},
        {id: 1, title: "Santorini Beach",imgsrc:"https://img.freepik.com/premium-photo/sunset-mountains-with-sun-setting-them_1327010-3514.jpg?w=740" },
        

    ]
  return (
      <div className='destination_cards_section'>
      <h3>DESTINATION</h3>
      <div className='cards'>
      {destination_data.map((item , index) => (
                  <DestinationCard title={item.title} imgsrc={item.imgsrc}/>
            ))}
            </div>
    </div>
  )
}
