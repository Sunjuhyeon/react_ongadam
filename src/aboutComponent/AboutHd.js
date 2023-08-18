import React from 'react'
import ab from '../scss/abouthd.module.css'

function AboutHd(props) {
    return (
        <section id={props.id} className={`${ab.section}`}>
            <div>
                <div data-aos="fade-up"
                     data-aos-duration="1000" 
                     className={`${ab.sentence1} d-md-flex justify-content-center align-items-end`}
                >
                    <span>온가담,</span>
                    <p className={`mb-0`}>&nbsp;&nbsp;삶의 따듯함과 편안함을 더해줍니다.</p>
                </div>
                <hr className={`m-0 mx-auto`} />
            </div>
            <ul className={`${ab.aboutUsCard} py-5 d-md-flex justify-content-center ps-0`}>
                {
                    props.info.contentsdb.about.aboutlist.map((v, i) => {
                        return (
                            <div>
                                <li>
                                    <div className={`${ab.AUcard} d-flex flex-md-column`}>
                                        <img src={v.src} alt="" />
                                        <div className={`${ab.aboutSentence} py-2 px-2`}>
                                            <p className={`${ab.cardTopic}`}>{v.cardTopic}</p>
                                            <p className={`${ab.cardName}`}>{v.cardName}</p>
                                            <div className={`pt-2 ${ab.cardcontent0cls}`}>
                                                {v.cardContent0.split("<br>").map((v, i) => {
                                                    const spanSplit = v.split("<span>");
                                                    return (
                                                        <p key={i} className={`${ab.cardContent}`}>
                                                            {spanSplit.map((val, idx) => {
                                                                if (idx % 2 === 0) {
                                                                    return val;
                                                                } else {
                                                                    return <span key={idx}>{val}</span>
                                                                }
                                                            })}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                            <div className={`${ab.cardcontent1cls}`}>
                                                {v.cardContent1.split("<br>").map((v, i) => {
                                                    const spanSplit = v.split("<span>");
                                                    return (
                                                        <p key={i}>
                                                            {spanSplit.map((val, idx) => {
                                                                if (idx % 2 === 0) {
                                                                    return val;
                                                                } else {
                                                                    return <span key={idx}>{val}</span>
                                                                }
                                                            })}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
            <div className={`${ab.sentence2}`}>
                <img src="/img/truckIcon.png" alt="truckIcon" />
                <p className={`${ab.sentence2Title}`}>온가담만의 <span>유통시스템</span></p>
                <div className={`${ab.sentence2Content}`}>
                    <p>온가담은 생산부터 판매 이후까지 모두 직접 <br />관리하여 <span>불필요한 유통 마진을 제거</span>합니다.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutHd