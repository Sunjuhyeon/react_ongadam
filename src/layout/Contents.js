import React from 'react';

import Slide from '../component/Slide'
import Event from '../component/Event'
import About from '../component/About'
function Contents(props) {
    return (
        <div id={props.id}>
            <Slide id="slide"></Slide>
            <Event id="event"></Event>
            <About id="about"></About>
        </div>
    );
}

export default Contents;