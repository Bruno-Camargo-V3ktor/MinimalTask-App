import React from "react";
import {TaskProps} from "./task.ts";

export interface SecurityContext {
    getUser: () => User | null,
    setUser: ( u: User | null ) => void ,
    login: ( user: User ) => Promise<boolean>;
    register: ( user: User ) => Promise<boolean>;
    logout: () => void;
    getToken: () => string | null;
    existedUserWithUsername: (username: string) => Promise<boolean>;
}

export interface SecurityProviderProps {
    children?: React.ReactNode;
}

export interface User {
    email?: string;
    username?: string;
    password?: string;
    id?: string;
    tasks?: TaskProps[];
}