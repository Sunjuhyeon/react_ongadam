import React from 'react'
import ab from '../scss/about.module.css'

function About(props) {
  return (
    <section id={props.id} className={`px-5`}>
        <div>
            <div className={`${ab.sentence1} d-md-flex justify-content-center align-items-end`}>
                <span>온가담,</span>
                <p className={`mb-0`}>&nbsp;&nbsp;삶의 따듯함과 편안함을 더해줍니다.</p>
            </div>
            <hr className={`m-0 mx-auto`}/>
        </div>
        <ul className={`${ab.aboutUsCard} py-5 d-md-flex justify-content-center ps-0`}>
            <div>
                <li>
                    <div className={`${ab.AUcard} d-flex flex-md-column`}>
                        <img src="" alt="" />
                        <div className={`${ab.aboutSentence} py-2 px-2`}>
                            <span className={`${ab.cardTopic}`}>Strong Point</span><br />
                            <span className={`${ab.cardName}`}>편리함 UP</span><br />
                            <p className={`${ab.cardContent}`}>
                                고객님의 <br className={`${ab.Mbr}`}/>생활을 더욱 <span>&#35;편하게</span> <br/>만들어줄 아이디어 <br className={`${ab.Mbr}`}/>상품입니다.
                            </p>
                        </div>
                    </div>
                </li>
            </div>
        </ul>
        <div className={`${ab.sentence2}`}>
                <img src="" alt="truck-icon"/>
                <p className={`${ab.sentence2Title}`}>온가담만의 <span>유통시스템</span></p>
                <div className={`${ab.sentence2Content} py-5`}>
                    <p>온가담은 생산부터 판매 이후까지 모두 직접 <br/>관리하여 <span>불필요한 유통 마진을 제거</span>합니다.</p>
                </div>
        </div>
    </section>
  )
}

export default About