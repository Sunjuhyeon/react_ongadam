import React from 'react';

import Slide from '../component/Slide'
import Event from '../component/Event'
import About from '../component/About'
import Review from '../component/Review'
import EventBanner from '../component/EventBanner'
function Contents(props) {
    return (
        <div id={props.id}>
            <Slide id="slide" info={props.info}></Slide>
            <EventBanner id="MEventBanner" info={props.info}></EventBanner>
            <Event id="event" info={props.info}></Event>
            <About id="about" info={props.info}></About>
            <Review id="review" info={props.info}></Review>
        </div>
    );
}

export default Contents;