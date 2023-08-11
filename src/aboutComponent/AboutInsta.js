import React, { useRef, useState } from 'react'
import abI from '../scss/aboutinsta.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

export const AboutInsta = (props) => {
  return (
    <section id={props.id} className={`py-5 position-relative`}>
        <span className={`${abI.bgtitle}`}>FOLLOW US</span>
        <h2 className={`${abI.name}`}>@ongadam_official</h2>
        <div className={`${abI.swiperBox}`}>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    props.info.contentsdb.about.aboutInsta.map((v, i) => {
                        return(
                            <SwiperSlide className={`${v.cls}`}></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default AboutInsta