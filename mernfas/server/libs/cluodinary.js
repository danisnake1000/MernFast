import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dd5tbps2r",
    api_key:"735397275862452",
    api_secret:"XBbcrOslGDbnxm3FDJAODbo99dY"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'

    })

}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
