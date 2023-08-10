import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section} py-5`}>
        <ul className={`d-lg-flex`}>
            <li className='lgE'>
                <div>
                    <div className={`eventimg event0 ${e.eventlist}`}>
                        <a href=""></a>
                    </div>
                    <div className={`${e.smtext} d-none`}>
                        <p>남양주 인기카페 <em>라온숨 X 온가담</em> 콜라보!!</p>
                        <span>무료체험&무료커피 맛보러 GoGo~</span>
                    </div>
                </div>
            </li>
            <li className={`${e.smE}`}>
                    {
                        props.info.contentsdb.event.smE.map((v, i) => {
                            return(
                                <div className={`d-sm-flex align-items-center`}>
                                    <div i className={`${v.imgcls} ${e.eventlist} ${e.smbox}`}>
                                        <a href=""></a>
                                    </div>
                                    <div className={`${v.textcls} ${e.textbox}`}>
                                        <p className={`mb-0`}>{v.title}</p>
                                        <span>{v.subtitle}</span>
                                        <a href="">바로가기<img src="/img/arrow.png" alt="arrow" /></a>
                                    </div>
                                    <div className={`${e.smtext} d-none`}>
                                        <p>
                                            {
                                                v.smtext.split("<em>").map((em, idx) => {
                                                    if (idx % 2 === 0){
                                                        return em
                                                    } else{
                                                        return <em key={idx}>{em}</em>
                                                    }
                                                    
                                                })
                                            }
                                        </p>
                                        <span>{v.smtextsub}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
            </li>
        </ul>
    </section>
  )
}

export default Event