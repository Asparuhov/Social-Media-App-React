const SETCURRENTUSER = 'SETCURRENTUSER';
const ADDPOST = 'ADDPOST';
const SETUSERS = 'SETUSERS';


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
export const setUsers = (payload) => {
    return {
        type: SETUSERS,
        payload: payload
    }
}