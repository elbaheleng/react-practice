import { commonApi } from "./commonapi"
import { serverurl } from "./serverurl"


//video api add
export const videoAddApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}
// api to get all videos
export const allVideosget = async () => {
    return await commonApi('GET', `${serverurl}/videos`)
}

// to delete a video
export const deleteVideoApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/videos/${id}`,{})
}

// to add a video to watch history
export const addVideoHistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/history`,reqBody)
}

//get videos from history
export const getVideoHistoryApi = async () => {
    return await commonApi('GET', `${serverurl}/history`)
}

//delete a video from history
export const deleteVideoHistoryApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/history/${id}`,{})
}

// add category
export const addCategoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/category`,reqBody)
}