import React from 'react'
import Footer from './Footer'
import { Carousel } from "flowbite-react";
import About from './About'


function Home() {
  return (
    <>
        
        <div className="h-56 sm:h-64 xl:h-[50vh] 2xl:h-96 max-w-[100%]">
            <Carousel>
                <img src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg" alt="..." />
                <img src="https://cdn.pixabay.com/photo/2016/09/04/20/14/sunset-1645105_1280.jpg" alt="..." />
                <img src="https://cdn.pixabay.com/photo/2018/09/24/11/02/animal-world-3699633_960_720.jpg" alt="..." />
                <img src="https://cdn.pixabay.com/photo/2017/06/05/10/15/landscape-2373651_1280.jpg" alt="..." />
                <img src="https://images.unsplash.com/photo-1644161170685-2f5678222db8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
            </Carousel>
        </div>

        <About/>

        <Footer/>


    </>
  )
}

export default Home
