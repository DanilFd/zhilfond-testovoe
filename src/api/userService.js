import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/users';
export const getUsersByUsernameOrId = (query) => {
    const items = query.split(',').map(item => item.trim()).filter(item => item.length)
    const queriesById = []
    const queriesByUsername = []
    items.forEach(item => {
        if (!isNaN(Number(item))) {
            queriesById.push(item)
        } else {
            queriesByUsername.push(item)
        }
    })
    const searchParams = new URLSearchParams()
    if (queriesById.length) {
        queriesById.forEach(query => {
            searchParams.append('id', query)
        })
    }
    if (queriesByUsername.length) {
        queriesByUsername.forEach(query => {
            searchParams.append('username_like', query)
        })
    }
    return axios.get(`${baseURL}?${searchParams}`);
}

export const getUserById = (id) => {
    return axios.get(baseURL + `/${id}`)
}
