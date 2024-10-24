import React, { useState } from 'react'
import FormData from 'form-data'
import axios from 'axios';
import ImageCropper from './ImageCropper2'

        const ImageUpload = (article) => {
    const articleId = article;
    const [blob, setBlob] = useState(null)
    const [blobThumbnail, setBlobThumbnail] = useState(null)
    const [inputImg, setInputImg] = useState('')

    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob);
    };
    const getBlobThumbnail = (blobThumbnail) => {
        // pass blob up from the ImageCropper component
        setBlobThumbnail(blobThumbnail);
    };

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleSubmitImage = (e) => {
        e.preventDefault()
        let data = new FormData();
        data.append('file', blob, "Hello");
        data.append('file', blobThumbnail, 'somefile');
        uploadFiles(data);


    }
    async function uploadFiles(data) {
        var response = await axios.post("http://104.248.113.144:3030/api/v1/blog/upload", data, {

            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }

        })
                .then((response) => {
                    axios.post("blog/" + articleId.article, response.data, ).then((response => {
                    }));

                    console.log(data);
                }).catch((error) => {
            //handle error
        });
    }

    return (
            <form onSubmit={handleSubmitImage} class="flex-vertical ">
                <div class='centerpasge'><span class="material-symbols-outlined font-xxl">
                        photo_frame
                    </span></div>
                <span class="Mulish font-lg"></span>
                <label for="file-upload" class="custom-file-uploadd font-sm Roboto pointer">
                    <input
                        id='file-upload'
                        type='file'
                        accept='image/*'
                        onChange={onInputChange}
                        class='sub-flag'
                        />
            
                    <span class="material-symbols-outlined float-right">
                        photo_size_select_small
                    </span>
                </label>
            
                <div class=" centerpdage ">
                    {
                inputImg && (
                            <div class="w-8d0 position-drel">
                                <ImageCropper 
                                    getBlob={getBlob}
                                    getBlobThumbnail={getBlobThumbnail}
                                    inputImg={inputImg}
                                    />      
                            </div>
                        )
                    }
                </div>
                <button class='play text-white center bg-variant-2 chat' type="submit"> Publish</button>
            </form>
            )
}

export default ImageUpload