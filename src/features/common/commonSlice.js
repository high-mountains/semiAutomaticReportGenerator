import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
    name: 'common',
    initialState: {
        teams: null,
        groups: null,
        users: null,
        roles: null,
        activeUsers: null
    },
    reducers: {
        setTeams: (state, action) => {
            state.teams = action.payload;
        },
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setActiveUsers: (state, action) => {
            state.activeUsers = action.payload
        }
    }
})

export const { setTeams, setGroups, setUsers, setActiveUsers, setRoles } = commonSlice.actions

export default commonSlice.reducer