'use client'
import React, { useState } from 'react'
import ImageSelector from '@/components/atoms/ImageSelector'
import ImageMagnifier from '@/components/atoms/ImageMagnifier'

const ImageGallery = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(0)

    const onImageClickHandler = (index) => {
        setSelectedImage(index)
    }

    return (
        <div className={'flex'}>
            <div className="hidden md:block">
                <ImageSelector
                    data={data}
                    onImageClick={onImageClickHandler}
                    selectedImage={selectedImage}
                />
            </div>

            <ImageMagnifier
                smallImageSrc={data[selectedImage].smallImageSrc}
                largeImageSrc={data[selectedImage].largeImageSrc}
                width={500}
                height={600}
            />
        </div>
    )
}

export default ImageGallery
