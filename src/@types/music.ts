export interface VideoSnippet {
    title: string;
    resourceId: {
        videoId: string;
    };
}

export interface PlaylistItem {
    snippet: VideoSnippet;
}

export interface PlaylistResponse {
    items: PlaylistItem[];
}
