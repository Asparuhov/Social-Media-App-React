const SETCURRENTUSER = 'SETCURRENTUSER';
const ADDPOST = 'ADDPOST'


export const setCurrentUser = (payload) => {
    return {
        type: SETCURRENTUSER,
        payload: payload
    }
}
export const addPost = (payload) => {
    return {
        type: ADDPOST,
        payload: payload
    }
}