import React from 'react';

import Slide from '../component/Slide'
import Event from '../component/Event'
import About from '../component/About'
function Contents(props) {
    return (
        <div id={props.id}>
            <Slide id="slide" info={props.info}></Slide>
            <Event id="event" info={props.info}></Event>
            <About id="about" info={props.info}></About>
        </div>
    );
}

export default Contents;