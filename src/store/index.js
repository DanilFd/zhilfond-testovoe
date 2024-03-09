import {createStore} from "vuex";
import {getUserById, getUsersByUsernameOrId} from "@/api/userService.js";

export const store = createStore({
    state: {
        isLoadingUsers: false,
        isLoadingUserProfile: false,
        users: [],
        userProfile: null,
        searchQuery: '',
        fetchUsersError:'',
        fetchUserProfileError: ''
    },
    mutations: {
        isLoadingUsers(state, isLoading) {
            state.isLoadingUsers = isLoading
        },
        isLoadingUserProfile(state, isLoading) {
            state.isLoadingUserProfile = isLoading
        },
        setUsers(state, users) {
            state.users = users
        },
        setSearchQuery(state, query) {
            state.searchQuery = query
        },
        setUserProfile(state, userProfile) {
            state.userProfile = userProfile
        },
        setFetchUsersError(state, error) {
            state.fetchUsersError = error
        },
        setFetchUserProfileError(state, error) {
            state.fetchUserProfileError = error
        }
    },
    actions: {
        fetchUsers({commit}, query) {
            commit('isLoadingUsers', true)
            commit('setFetchUsersError', '')
            getUsersByUsernameOrId(query)
                .then(res => commit('setUsers', res.data))
                .catch(() => commit('setFetchUsersError', 'Произошла ошибка при загрузке пользователей'))
                .finally(() => commit('isLoadingUsers', false))
        },
        fetchUserProfile({commit}, id) {
            commit('isLoadingUserProfile', true)
            commit('setFetchUserProfileError', '')
            getUserById(id)
                .then(res => commit('setUserProfile', res.data))
                .catch(() => commit('setFetchUserProfileError', 'Произошла ошибка при загрузке профиля пользователя'))
                .finally(() => commit('isLoadingUserProfile', false))
        }
    }
})
