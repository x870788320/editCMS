const loginInitialState = {
    num:2,
    baseItemOfSignIn: [
        {
            id: 1,
            name:'signInVal',
            placeholder:'user name',
            icon: 'meh',
            passWord: false
        },
        {
            id: 2,
            name:'password',
            placeholder:'input password',
            icon: 'lock',
            passWord: true
        }
    ],
    baseItemOfSignUp: [
        {
            id: 1,
            name:'signInVal',
            placeholder:'user name',
            icon: 'meh',
            passWord: false
        },
        {
            id: 2,
            name:'emailVal',
            placeholder:'input email',
            icon: 'mail',
            passWord: false
        },
        {
            id: 3,
            name:'password',
            placeholder:'input password',
            icon: 'lock',
            passWord: true
        }
    ]
}


const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE_1':
            return loginInitialState.num++
        case 'ACTION_TYPE_2':
            return loginInitialState.num--
        default:
            return state
    }
}


export default login