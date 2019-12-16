const homeState = {
    currentListId: 1
}

const homeRe = (state = homeState, action) => {
    switch(action.type){
        case 'CHANGE_CURRENT_LIST':
            // return {
            //     name: 'nnnn'
            // }
            // return  Object.assign({}, state, {
            //     name: 'bbbbb'
            // })
            return {
                ...state,
                currentListId: action.id
            }
        default:
            return state
    }
}

export default homeRe