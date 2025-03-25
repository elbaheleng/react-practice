import { commonApi } from "./commonapi"
import { serverurl } from "./serverurl"


//video api
export const videoAddApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}