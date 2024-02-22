import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'

function CarouselWithTimer({ images, interval }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const imageCount = images.length
        let timerInterval

        if (!isHovered) {
            timerInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount)
            }, interval)
        }

        return () => clearInterval(timerInterval)
    }, [images, interval, isHovered])

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Carousel showThumbs={false} selectedItem={currentIndex}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={` ${
                            isHovered
                                ? 'hover:scale-105 transition-transform duration-300'
                                : ''
                        }`}
                        style={{ transitionProperty: 'transform' }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselWithTimer
