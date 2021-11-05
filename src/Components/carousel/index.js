import React from 'react'
import Carousel from 'react-elastic-carousel'
import './styles.scss'

export default function TorotoCarousel ({children,  modalKey}) {   
  
 
  
  return (
    <Carousel itemsToShow={1} pagination={false} initialActiveIndex={modalKey} >
    { children}
  </Carousel>
  )
}