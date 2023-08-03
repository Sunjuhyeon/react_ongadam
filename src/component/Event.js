import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section} container-lg py-5`}>
        <ul className={`d-md-flex`}>
            {
              props.info.contentsdb.event.map((v, i) => {
                return(
                  <li className={`${v.cls} col`}><a href=""></a></li>
                )
              })
            }
        </ul>
    </section>
  )
}

export default Event