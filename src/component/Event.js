import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section} container-lg py-5`}>
        <ul className={`d-md-flex`}>
            <li className={`event0 col`}><a href=""></a></li>
            <li className={`event1 col`}><a href=""></a></li>
            <li className={`event2 col`}><a href=""></a></li>
        </ul>
    </section>
  )
}

export default Event