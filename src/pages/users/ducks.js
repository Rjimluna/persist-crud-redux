const initialState = {
    usersData: []
}

const SHOW_USER = 'usersInformation/SHOW_USER'
export function showUser(users) {
    return {
        type: SHOW_USER,
        payload: users
    }
}

const DEL_USER = 'usersInformation/DEL_USER'
export function delUser(users) {
    return {
        type: DEL_USER,
        payload: users
    }
}

const ADD_USER = 'usersInformation/ADD_USER'
export function addUser(users) {
    return {
        type: ADD_USER,
        payload: users
    }
}

const EDIT_USER = 'usersInformation/EDIT_USER'
export function editUser(users) {
    return {
        type: EDIT_USER,
        payload: users
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                usersData: [
                    ...state.usersData,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        age: action.payload.age,
                        contact: action.payload.contact,
                        address: action.payload.address
                    }
                ]
            }

        case EDIT_USER:
            return {
                ...state,
                usersData: action.payload
            }

        case DEL_USER:
            return {
                ...state,
                usersData: action.payload
            }

        default:
            return state
    }
}