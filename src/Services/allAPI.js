import { commonApI } from "./commonAPI";
import { serverUrl } from "./ServerUrl";


// Add Video API
export const addvideoAPI = async(reqBody)=>{
    return await commonApI(`post`,`${serverUrl}/allvideos`,reqBody)


}
// get all videos
export const getVideoAPI = async()=>{
    return await commonApI(`get`,`${serverUrl}/allvideos`,{})

}
// get a particular video details
export const getAVideoAPI = async (id) => {
    return await commonApI(`get`,`${serverUrl}/allvideos/${id}`,{})
    
}


// delete a particular video
export const deleteAVideoAPI = async(id)=>{
    return await commonApI(`delete`,`${serverUrl}/allvideos/${id}`,"")
}

//add a watch history API
export const addWatchAPI = async(reqBody)=>{
    return await commonApI(`post`,`${serverUrl}/watchhistory/`,reqBody)
}

// get all watch history
export const getWatchAPI = async()=>{
    return await commonApI(`get`,`${serverUrl}/watchhistory`,{})
}

//delete a watch history
export const deleteWatchAPI = async(id)=>{
    return await commonApI(`delete`,`${serverUrl}/watchhistory/${id}`,"")
}

//add a category API
export const addCategoryAPI = async(reqBody)=>{
    return await commonApI(`post`,`${serverUrl}/category/`,reqBody)
}
// get all category
export const getCategoryAPI = async()=>{
    return await commonApI(`get`,`${serverUrl}/category`,{})
}
// delete a category
export const deleteCategoryAPI = async(id)=>{
    return await commonApI(`delete`,`${serverUrl}/category/${id}`,"")
}
//get a particular video details API
export const getVideoDetailsAPI = async (id) => {
    return await commonApI(`get`,`${serverUrl}/allvideos/${id}`,{})
    
}

//update a particular video details in a category
export const updateVideoDetailsAPI = async (categoryId,categeoryDetails) => {
    return await commonApI(`put`,`${serverUrl}/category/${categoryId}`,categeoryDetails)
    
}