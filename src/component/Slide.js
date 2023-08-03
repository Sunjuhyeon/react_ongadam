import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import slide from '../scss/slide.module.css'

function Slide(props) {
    return (
        <section id={props.id}>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`mySwiper ${slide.swiper}`}
            >
                {
                    props.info.contentsdb.slide.map((v, i) => {
                        return(
                            <SwiperSlide>
                                <a href="">
                                    <img src={v.src} alt="" />
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