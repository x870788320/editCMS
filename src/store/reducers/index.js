const publicState = {
    
}


const publicRe = (state = publicState, action) => {
    switch (action.type) {
        case 'HANDLE_GO':
            console.log(action)
            return state
        case 'ACTION_TYPE_2':
            return state
        default:
            return state
    }
}


export default publicRe