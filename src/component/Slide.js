import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import slide from '../scss/slide.module.css'

function Slide(props) {
    return (
        <section id={props.id}>
            <Swiper
                navigation={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                loopedSlides={2}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    650:{
                        slidesPerView: 1.3
                    }
                    ,1400: {
                        slidesPerView : 1.2
                    }
                }}
                
                modules={[Autoplay, Navigation]}
                className={`mySwiper ${slide.swiper}`}
            >
                {
                    props.info.contentsdb.slide.map((v, i) => {
                        return (
                            <SwiperSlide key={i} className={`${slide.swiperslide}`}>
                                <a href={v.link} className={`${v.cls}`}>
                                    <div className={`${slide.textbox}`}>
                                        <div className='categorybox'>
                                            <span className={`${slide.category}`}>{v.category}</span>
                                        </div>
                                        <div className='titlebox'>
                                            <p className={`mb-0 ${v.titlecls} ${slide.title}`}>
                                                {
                                                    v.title.split("<em>").map((em,idx) => {
                                                        if (idx % 2 === 0){
                                                            return em
                                                        } else{
                                                            return <em key={idx}>{em}</em>
                                                        }
                                                    })
                                                }
                                            </p>
                                            <p className={`mb-0 ${slide.subtitle}`}>{v.subtitle}</p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Slide;