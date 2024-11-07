import { MusicComponent } from "./styles";
import {useEffect, useRef, useState} from 'react';

import { SpeakerSimpleHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";
import { musics } from "../../../../@types/music.ts";



export function MusicPlay() {
    
    // States
    const [mute, setMute] = useState( false )
    const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Attributes
    const currentMusic = musics[currentMusicIndex];

    // Methods
    function swapMute() {

        setMute( (value) => {
                // @ts-ignore
                audioRef.current.muted = !value;
                return !value
            }
        )

    }

    function trackEnd() {
        setCurrentMusicIndex( Math.floor( Math.random() * ( musics.length - 1 ) )   );
    }

    // Effects
    useEffect(() => {
        // @ts-ignore
        audioRef.current.volume = 0.15;
        setCurrentMusicIndex( Math.floor( Math.random() * ( musics.length - 1 ) )   );
    }, []);


    // Render
    return (
        <MusicComponent>

            <div className="titleContainer">
                <h3 className='titleMusic'> {currentMusic.title} </h3>
            </div>

            {
                !mute
                    ? <SpeakerSimpleHigh size={50} className='btnIcon' onClick={swapMute}/>
                    : <SpeakerSimpleSlash size={50} className='btnIcon' onClick={swapMute}/>
            }

            <audio
                ref={audioRef}
                src={currentMusic.direction}
                onEnded={trackEnd}
                autoPlay
            />

        </MusicComponent>
    );
}