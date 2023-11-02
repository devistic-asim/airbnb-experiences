import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import CardSlider from './CardSlider.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    {/* <Card 
      img = 'katie-zaferes.png'
      rating = '5.0'
      reviewCount = '{6}'
      country = 'USA'
      title = 'Life Lessons with Katie Zaferes'
      price = {136}
      label = 'Sold Out'
    /> */}
    <CardSlider />
  </React.StrictMode>,
)
