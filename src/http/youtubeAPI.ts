import axios from "axios";
import {PlaylistResponse} from "../@types/music.ts";

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout: 50000,
})

const YOUTUBE_API_KEY = "AIzaSyDekBN1WETs1IyPb4jZz-mYGr8wEQ4zIj4"
const PLAYLIST_ID = "PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo"

export async function getPlaylist(): Promise< PlaylistResponse > {

    try {
        const response = await api.get('/playlistItems',
            {
                params: {
                    part: 'snippet',
                    playlistId: PLAYLIST_ID,
                    maxResults: 50,
                    key: YOUTUBE_API_KEY,
                },
            }
        );

        return { items: response.data.items };
    }

    catch (error) {
        console.error("Erro ao buscar a playlist:", error);
        return {  } as PlaylistResponse;
    }

}