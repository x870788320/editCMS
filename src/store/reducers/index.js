const publicState = {
    token: true
}


const publicRe = (state = publicState, action) => {
    switch (action.type) {
        case 'HANDLE_GO':
            console.log(action)
            return state
        case 'CHANGE_LOGIN_STATE':
            return {
                ...state,
                token: action.login
            }
        default:
            return state
    }
}


export default publicRe