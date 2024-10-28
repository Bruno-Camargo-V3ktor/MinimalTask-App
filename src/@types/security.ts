import React from "react";
import {TaskProps} from "./task.ts";

export interface SecurityContext {
    user: User | null,
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