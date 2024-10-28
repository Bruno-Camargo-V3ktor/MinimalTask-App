import React from "react";

export interface SecurityContext {
    user: User | null,
    login: ( user: User ) => boolean;
    register: ( user: User ) => boolean;
    logout: () => void;
    getToken: () => string | null;
    existedUserWithUsername: (username: string) => boolean;
}

export interface SecurityProviderProps {
    children?: React.ReactNode;
}

export interface User {
    email?: string;
    username?: string;
    password?: string;
    id?: string;
}