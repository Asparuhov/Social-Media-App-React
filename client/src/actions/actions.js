const SETCURRENTUSER = 'SETCURRENTUSER';



export const setCurrentUser = (payload) => {
    return {
        type: SETCURRENTUSER,
        payload: payload
    }
}