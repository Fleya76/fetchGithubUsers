import React, { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { Action } from "./components/Action";
import { Input } from "./components/Input";
import { Gallery } from "./components/Gallery";

import { getUsers } from "./utils/api";
import {TUser} from "./types/users";

import locale from './locales/en.json';

import './styles/App.css';

function App() {
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<TUser[]>([])
    const [error, setError] = useState<string>('')
    const [countItems, setCountItems] = useState<number>()

    useEffect( () => {
        const getUsersData = async () => {
            setError('')
            setCountItems(0)
            setUsers([])
            if (search.length > 2) {
                try {
                    setLoading(true)
                    const data = await getUsers(search);
                    if('message' in data && data.message.includes('API rate limit exceeded')){
                        setError(data.message)
                    } else {
                        setUsers('items' in data ? data.items : users)
                        setCountItems('total_count' in data ? data.total_count : countItems)
                        setError('')
                    }
                } catch(err) {
                    setError(`${err}`)
                } finally {
                    setLoading(false)
                }
            } else {
                setUsers([])
            }
        };
        getUsersData();
    }, [search])

    return (
        <>
            <Header text={locale.header} />
            <Input  {...(countItems && countItems > users.length ? {extraInformation: `${locale.maxDispay}` }: null)}  {...(countItems ? { successMessage: `${locale.totalItems} ${countItems}` } : null)} errorMessage={error} placeholder={locale.input} onChange={setSearch} />
            <Action withCheckbox withDelete withDuplicate />
            {loading ? <p className="loading">{locale.loading}</p>: <Gallery isEmptyMessage={locale.isEmpty} items={users} />}
        </>
    );
}

export default App;
