import React, { createContext, useState, FC, useContext, ReactNode  } from "react";
import {TUser} from "../types/users";

type UserContextProps = {
    users: TUser[];
    addUsers: (users: TUser[]) => void;
    duplicateUsers: (userIds: number[]) => void;
    deleteUsers: (userIds: number[]) => void;
}

const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);

export const useUserContext = () => useContext(UserContext);

const UserProvider: React.FC<React.ReactNode> = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<TUser[]>([]);

    const addUsers = ( users: TUser[]) => {
        setUsers([...users]);
    };

    const duplicateUsers = (userIds: number[]) => {
        console.log('duplicateUser')
    };

    const deleteUsers = (userIds: number[]) => {
        console.log('deleteUser')
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
