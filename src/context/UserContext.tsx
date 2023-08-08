import React, { createContext, useState, FC, useContext, ReactNode  } from "react";
import {TUser} from "../types/users";

interface TUserProps {
    children: ReactNode;
}

type TUserContext = {
    users: TUser[];
    addUsers: (users: TUser[]) => void;
    countCheckedItems: () => number;
    handleUserCheck: (isChecked: boolean, userId?: number) => void;
    duplicateSelectedUsers: () => void;
    deleteSelectedUsers: () => void;
}

const UserContext = createContext<TUserContext>({
    users: [],
    addUsers: () => {},
    countCheckedItems: () => 0,
    handleUserCheck: () => {},
    duplicateSelectedUsers: () => {},
    deleteSelectedUsers: () => {}
});

export const useUserContext = () => useContext(UserContext);

const UserProvider: FC<TUserProps> = ({ children }) => {
    const [users, setUsers] = useState<TUser[]>([]);

    const addUsers = ( users: TUser[]) => {
        setUsers(users.map((user) => ({...user, isChecked: false})));
    };

    const handleUserCheck = (isChecked: boolean, userId?: number) => {
        setUsers(users.map((user) => {
            if (userId !== undefined && user.id === userId) {
                return { ...user, isChecked };
            } else if (userId === undefined) {
                return { ...user, isChecked };
            }
            return user;
        }));
    };
    const duplicateSelectedUsers = () => {
        const usersToDuplicate = users.filter((user) => user.isChecked);
        // We should replace this logic in the backend side and get the new users from there to avoid the id duplication.
        setUsers([...users, ...usersToDuplicate.map((user) => ({...user, id: user.id + 1}))]);
    };

    const deleteSelectedUsers = () => {
        // We should replace this logic in the backend side and get the new users from there.
        setUsers(users.filter((user) => !user.isChecked));
    };

    const countCheckedItems = () => users.filter((user) => user.isChecked).length;

    return (
        <UserContext.Provider
            value={{
                addUsers,
                countCheckedItems,
                handleUserCheck,
                deleteSelectedUsers,
                duplicateSelectedUsers,
                users
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
