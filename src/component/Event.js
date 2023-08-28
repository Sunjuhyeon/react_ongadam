import React from 'react'
import e from '../scss/event.module.css'

function Event(props) {
  return (
    <section id={props.id} className={`${e.section}`}>
        <div className={`${e.titlename}`}>
            <p>진행중인 이벤트</p>
        </div>
        <ul className={`container-lg d-flex flex-column flex-md-row justify-content-center align-items-center`}>
            {
                props.info.contentsdb.event.list.map((v, i) => {
                    return(
                        <li className={`${e.eventlist} d-sm-flex align-itmes-center`}>
                            <div className='eventbigbox'>
                                <div className={`${v.imgcls}`}>
                                    <a href=""></a>
                                </div>
                                <div className={`${v.textcls} ${e.textbox}`}>
                                    <div className={`${e.textbigbox}`}>
                                        {v.title.split("<br>").map((br, i) => {
                                            const emSplit = br.split("<em>");
                                            return (
                                                <p key={i} className={"title" + i}>
                                                    {emSplit.map((v, idx) => {
                                                        if (idx % 2 === 0) {
                                                            return v; // 짝수 인덱스는 <strong> 태그 외의 텍스트
                                                        } else {
                                                            return <em key={idx}>{v}</em>; // 홀수 인덱스는 <strong> 태그 내부의 텍스트
                                                        }
                                                    })}
                                                </p>
                                            );

})}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}

export default Event