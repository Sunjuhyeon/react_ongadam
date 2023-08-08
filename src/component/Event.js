import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section} py-5`}>
        <ul className={`d-lg-flex`}>
            <li className={`col-lg-6`}>
              <div  className={`event1`}><a href=""></a></div>
            </li>
            <li className={`col-lg-6`}>
              <div i className={`event0`}><a href=""></a></div>
              <div i className={`event2`}><a href=""></a></div>
            </li>
        </ul>
    </section>
  )
}

export default Event