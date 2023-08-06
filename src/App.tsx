import React, { useEffect, useState } from 'react'
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import locale from './locales/en.json';

import './styles/App.css';
import { getUsers } from "./utils/api";

function App() {
    const [search, setSearch] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect( () => {
        const getUsersData = async () => {
            if (search.length > 0) {
                const data = await getUsers(search);
                if('message' in data && data.message.includes('API rate limit exceeded')){
                    console.log('rateL', data);

                } else {
                    console.log('setU', data);
                }
            }
        };
        getUsersData();
    }, [search])

    return (
        <>
          <Header text={locale.header} />
          <Input placeholder={locale.input} value={search} onChange={setSearch} />
        </>
    );
}

export default App;
