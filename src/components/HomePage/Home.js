import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Destinations from './Destinations'
import Season from './Season'
import Latest from './Latest'
import Reviews from './Reviews'
import Instagram from './Instagram'
import Footer from './Footer'

function Home() {
    return (
        <div>
            
            <Hero />
            <Destinations />
            <Season />
            <Latest />
            <Reviews />
            <Instagram />
            <Footer />
        </div>
    )
}

export default Home
