// ImageCropper.js

import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './CropImage2'
import {getCroppedImgThumbnail} from './Thumbnails';

const ImageCropper = ({ getBlob,getBlobThumbnail, inputImg }) => {
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)

    /* onCropComplete() will occur each time the user modifies the cropped area, 
     which isn't ideal. A better implementation would be getting the blob 
     only when the user hits the submit button, but this works for now  */
    const onCropComplete = async (_, croppedAreaPixels) => {
        const croppedImage = await getCroppedImg(
                inputImg,
                croppedAreaPixels
                )
        const cropThumbnail = await getCroppedImgThumbnail(
                inputImg,
                croppedAreaPixels
                )
        getBlob(croppedImage);
        getBlobThumbnail(cropThumbnail);
    }

    return (
            /* need to have a parent with `position: relative` 
             to prevent cropper taking up whole page */
    
            <Cropper
                image={inputImg}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                />
                
            )
}

export default ImageCropper
