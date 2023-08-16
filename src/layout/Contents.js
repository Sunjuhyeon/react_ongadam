import React from 'react';

import Slide from '../component/Slide'
import Event from '../component/Event'
import About from '../component/About'
import Review from '../component/Review'
import EventBanner from '../component/EventBanner'
import Button from '../component/Button'

function Contents(props) {
    return (
        <div id={props.id}>
            <Slide id="slide" info={props.info}></Slide>
            <EventBanner id="MEventBanner" info={props.info}></EventBanner>
            <Review id="review" info={props.info}></Review>
            <Event id="event" info={props.info}></Event>
            <About id="about" info={props.info}></About>
            <Button id="button"></Button>
        </div>
    );
}

export default Contents;