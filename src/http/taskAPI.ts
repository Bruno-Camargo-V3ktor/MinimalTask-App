import {api} from "./config";
import {User} from "../@types/security.ts";
import { TaskProps } from "../@types/task.ts";

export async function taskCreate( user: User, task: TaskProps, token: string ): Promise<TaskProps | null> {

    try {
        const response = await api.post(`/${user.id}/tasks`, task, {

            headers: { "Authorization": `Basic ${token}` },

        });

        return response.data;
    }

    catch (error) {
        // @ts-ignore
        if ( error.response.status == 401 ) return null;
        return { id: "" } as TaskProps;
    }

}

export async function taskUpdate( user: User, task: TaskProps, token: string ): Promise<boolean | null> {

    try {
        await api.put(`/${user.id}/tasks/${task.id}`, task, {
            headers: { "Authorization": `Basic ${token}` },
        });

        return true;
    }

    catch (error) {
        console.log( error )

        // @ts-ignore
        if ( error.response.status == 401 ) return null;
        return false;
    }

}

export async function taskDelete( user: User, task: TaskProps, token: string ): Promise<boolean | null> {

    try {
        await api.delete(`/${user.id}/tasks/${task.id}`, {
            headers: { "Authorization": `Basic ${token}` },
        });

        return true;
    }

    catch (error) {
        // @ts-ignore
        if ( error.response.status == 401 ) return null;
        return false;
    }

}