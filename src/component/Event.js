import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section} py-5`}>
        <ul className={`d-lg-flex`}>
            <li>
              <div  className={`event0 ${e.eventlist}`}>
                <a href=""></a>
              </div>
            </li>
            <div>
              <li className={`d-lg-flex align-items-center`}>
                <div i className={`event1 ${e.eventlist} ${e.smbox}`}>
                  <a href=""></a>
                </div>
                <div className={`${e.textbox}`}>
                  <p className={`mb-0`}>캠핑에 미치다 X 온가담</p>
                  <span>최대 30%세일 오픈!!</span>
                  <a href="">바로가기 <img src="/img/arrow.png" alt="arrow" /></a>
                </div>
              </li>
              <li className={`d-lg-flex align-items-center`}>
                <div className={`${e.textbox}`}>설명입니다.</div>
                <div i className={`event2 ${e.eventlist} ${e.smbox}`}>
                  <a href=""></a>
                </div>
              </li>
            </div>
        </ul>
    </section>
  )
}

export default Event