'use client'
import React, { useState } from 'react'
import ImageSelector from '@/components/atoms/ImageSelector'
import ImageMagnifier from '@/components/atoms/ImageMagnifier'
import { useWindowSize } from "@uidotdev/usehooks";

const ImageGallery = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const size = useWindowSize();
console.log(size)
    const onImageClickHandler = (index) => {
        setSelectedImage(index)
    }

    return (
        <div className={'flex flex-col-reverse sm:flex-row sm:gap-x-4'}>
            <div className="">
                <ImageSelector
                    data={data}
                    onImageClick={onImageClickHandler}
                    selectedImage={selectedImage}
                />
            </div>
            <div className='mt-4'>
                <ImageMagnifier
                    smallImageSrc={data[selectedImage].smallImageSrc}
                    largeImageSrc={data[selectedImage].largeImageSrc}
                    width={Math.min(size.width, 418)}
                    height={1.5*Math.min(size.width, 418)}
                />
            </div>
        </div>
    )
}

export default ImageGallery
