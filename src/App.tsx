import React, { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { ItemsAction } from "./components/ItemsAction";
import { Input } from "./components/Input";
import { Gallery } from "./components/Gallery";

import { getUsers } from "./utils/api";

import locale from './locales/en.json';

import './styles/App.css';
import { useUserContext } from './context/UserContext';

function App() {
    const { users, addUsers } = useUserContext();

    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [countItems, setCountItems] = useState<number>()

    useEffect( () => {
        const getUsersData = async () => {
            setError('')
            setCountItems(0)
            addUsers([])
            if (search.length > 1) {
                try {
                    setLoading(true)
                    const data = await getUsers(search);
                    if('message' in data && data.message.includes('API rate limit exceeded')){
                        setError(data.message)
                    } else {
                        addUsers('items' in data ? data.items : users)
                        setCountItems('total_count' in data ? data.total_count : countItems)
                    }
                } catch(err) {
                    setError(`${err}`)
                } finally {
                    setLoading(false)
                }
            } else {
                addUsers([])
            }
        };
        getUsersData();
    }, [search])

    return (
        <>
            <Header text={locale.header} />
            <Input  {...(countItems && users.length && countItems > users.length ? {extraInformation: `${locale.maxDispay}` }: null)}  {...(countItems  && users.length ? { successMessage: `${locale.totalItems} ${countItems}` } : null)} errorMessage={error} placeholder={locale.input} onChange={setSearch} />
            {countItems ? <ItemsAction withCheckbox withDelete withDuplicate /> : null}
            {loading ? <p className="loading">{locale.loading}</p>: <Gallery isEmptyMessage={locale.isEmpty} items={users} />}
        </>
    );
}

export default App;
