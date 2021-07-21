import axios from 'axios';



// AXIOS
export const uploadImg = async (ev) =>{
    // Defining our variables
    const CLOUD_NAME = 'sprint4' // Insert yours
    const UPLOAD_PRESET = 'sprint_4' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset',UPLOAD_PRESET)
    // console.log('uploadImg -> FORM_DATA', FORM_DATA)
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch(err) {
        console.error('ERROR!', err)
    }
}