import {api} from "./config";
import {User} from "../@types/security.ts";

export async function userLogin( user: User ): Promise<User | null> {

    try {
       const response = await api.get("/users/login", {

           auth: {
                username: user.username ? user.username : "",
                password: user.password ? user.password : "",
            },

        });

       return response.data;
    }

    catch (error) {
        console.log( error )
        return null;
    }

}

export async function userRegister( user: User ): Promise<User | null> {

    try {
        const response = await api.post("/users", user);
        return response.data;
    }

    catch (error) {
        return null;
    }

}

export async function userExistedWithUsername( username: string ): Promise<boolean> {

    try {
        const response = await api.get(`/users/exist/${username}`);
        return response.data;
    }

    catch (error) {
        return false;
    }

}