import React, { createContext, useState, FC, useContext, ReactNode  } from "react";
import {TUser} from "../types/users";

interface TUserProps {
    children: ReactNode;
}


type TUserContext = {
    users: TUser[];
    addUsers: (users: TUser[]) => void;
    duplicateUsers: (userIds: number[]) => void;
    deleteUsers: (userIds: number[]) => void;
}

const UserContext = createContext<TUserContext | null>(null);

export const useUserContext = () => useContext(UserContext);

const UserProvider: FC<TUserProps> = ({ children }) => {
    const [users, setUsers] = useState<TUser[]>([]);

    const addUsers = ( users: TUser[]) => {
        setUsers([...users]);
    };

    const duplicateUsers = (userIds: number[]) => {
        console.log('duplicateUser', userIds)
    };

    const deleteUsers = (userIds: number[]) => {
        console.log('deleteUser', userIds)
    };


    return (
        <UserContext.Provider
            value={{
                addUsers,
                deleteUsers,
                duplicateUsers,
                users
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
