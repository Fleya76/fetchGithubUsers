import { TItems } from "../types/users";

const API = 'https://api.github.com'
const SEARCH = '/search'
const USERS = '/users'

type TApiMessage = {
    documentation_url: string;
    message: string;
}

/**
 * Description: Function to fetch users from GitHub API.
 */
const getUsers = async (query: string): Promise<TItems | TApiMessage> => {
    try {
        const response = await fetch(`${API}${SEARCH}${USERS}?q=${query}`);
        const data: TItems | TApiMessage = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch users from GitHub API ${error}`)
    }
}

export { getUsers }