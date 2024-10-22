import React from "react";

export interface SecurityContext {
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
    name?: string;
    username?: string;
    password?: string;
}