import React, { useState } from 'react'
import FormData from 'form-data'
import axios from 'axios';
import swal from 'sweetalert';
import Nav from './Nav';
import ImageCropper from './ImageCropper'

        const ImageUpload = () => {

    const[id, setId] = useState("");
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[programId, setProgramId] = useState("");
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
    const   handleIdChange = (event) => {
        setId(event.target.value);
    }
    const  handleNameChange = (event) => {
        setName(event.target.value);
    }
    const  handleDescriptionChange = (event) => {
        setDescription(event.target.value);
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
                    var program = {programId: id, name: name, description: description, image: response.data}
                  axios.post("programs/", program)
                            .then((e) => {
                               swal("", "", "success");
                                window.location.href = '/programs/' + e.data.id;
                            }).catch((err) => {

                    });

                    console.log(data);
                }).catch((error) => {
            //handle error
        });
    }

    return (
            <div class="margin-top-md">
    
            <form onSubmit={handleSubmitImage} class="flex-vertical margin-top-md session ">
    
                <div class="flex-vertical w-100">
                    <span class="Play">Register a new program</span>
                    <span class="font-bold float-left text-gray">Program Code*</span>
                    <input type="text"  value={id} class="input-variant-x  margin-sm-fixed" required onChange={handleIdChange} placeholder="BPY-232 etc" />
                    <span class="font-bold text-gray">Program Name*</span>                            
                    <input type="text"  value={name} class=" input-variant-x form-input   margin-sm-fixed" required onChange={handleNameChange} placeholder="Software Devlopment With Java" />
                    <span class="font-bold text-gray">About*</span>                        
                    <textarea rows="6" type="text" id="phone" value={description} class=" input-variant-x  form-insput  margin-sm-fixed" required onChange={handleDescriptionChange} placeholder="Course description" />
            
                </div>
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
            
                <div class=" centerpdage cropper session relative ">
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
                <button class='play text-white center bg-variant-3 border-none' type="submit"> <span class="material-symbols-outlined bg-variant-2">
                        newsmode
                    </span>Publish</button>
            </form>
            </div>
            )
}

export default ImageUpload