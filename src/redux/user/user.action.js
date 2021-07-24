import UserActionTypes from './user.types'





export const getAllEmployees = () => ({
    type: UserActionTypes.GET_USERS_DETAIL,
    
})
export const loadEmployeesDetails = (details) => ({
    type: UserActionTypes.LOAD_USERS_DETAIL,
    payload: details
})
export const deleteEmployee = (id) => ({
    type: UserActionTypes.DELETE_USERS_DETAIL,
    payload: id
})


