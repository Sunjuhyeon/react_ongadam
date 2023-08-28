import React, { useRef, useState, useEffect } from 'react'
import e from '../scss/event.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

function Event(props) {

    const [eventSwiper, setEventSwiper] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function initSwiper(){
            if(eventSwiper){
                eventSwiper.destroy();
            };

            if(screenWidth > 991){
                setEventSwiper(
                    new Swiper('.mySwiper', {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    })
                );
            } else{
                setEventSwiper(
                    new Swiper('.mySwiper', {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        loop : true,
                        centeredSlides: true,
                    })
                );
            }
        }

        initSwiper();

        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });

        return() => {
            if(eventSwiper){
                eventSwiper.destroy();
            }
            window.removeEventListener('resize', () => {
                setScreenWidth(window.innerWidth);
            });
        };
    }, [screenWidth, eventSwiper]);


    
    
  return (
    <section id={props.id} className={`${e.section}`}>
        <div className={`${e.titlename}`}>
            <p>진행중인 이벤트</p>
        </div>
        <Swiper 
        // navigation={true}
        // slidesPerView={1.5}
        // spaceBetween={10}
        // centeredSlides={true}
        // modules={[Navigation]}
        // breakpoints={{
        //     768: {
        //         slidesPerView: 3,
        //         centeredSlides:false,
        //     }
        // }}
        className={`mySwiper ${e.eventbox} container-lg d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center`}>
            {
                props.info.contentsdb.event.list.map((v, i) => {
                    return(
                        <SwiperSlide className={`col-md-4`} key={i}>
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
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Event