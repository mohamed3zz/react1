import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import './styles/main.css'
import Destination from './components/destination/Destination'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Destination/>
      <Footer/>
    </div>
  )
}
