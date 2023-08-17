import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
                breakpoints={{
                    650:{
                        slidesPerView: 1.3
                    }
                    ,1400: {
                        slidesPerView : 1.8
                    }
                }}
                
                modules={[ Navigation]}
                className={`mySwiper ${slide.swiper}`}
            >
                {
                    props.info.contentsdb.slide.map((v, i) => {
                        return (
                            <SwiperSlide className={`${slide.swiperslide}`}>
                                <a href={v.link} className={`${v.cls}`}>
                                    <p className={`mb-0 ${v.titlecls} ${slide.title}`}>{v.title}</p>
                                    <p className={`mb-0 ${slide.subtitle}`}>{v.subtitle}</p>
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