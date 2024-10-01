import { MusicComponent } from "./styles";
import { useState } from 'react';

import { SpeakerSimpleHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";


export function MusicPlay() {
    
    // States
    const [mute, setMute] = useState( false )

    // Methods
    function swapMute() { setMute( (value) => !value ) }

    // Render
    return (
        <MusicComponent>
            
            <div className="titleContainer" >
                <h3 className='titleMusic'>myxeria music</h3>
            </div>
            

            {
                !mute
                ? <SpeakerSimpleHigh size={50} className='btnIcon' onClick={swapMute} />
                : <SpeakerSimpleSlash size={50} className='btnIcon' onClick={swapMute} />
            }

        </MusicComponent>
    );
}