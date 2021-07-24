import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectEmployeesDetail = createSelector(
    [selectUser],
    user => user.employeesDetail
)

