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