import React, { useState } from 'react'
import re from '../scss/review.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode, Mousewheel } from 'swiper/modules';


function Review(props) {
    return (
        <section id={props.id} className={` ${re.section}`}>
            <div className='px-lg-0 d-flex flex-column flex-lg-row justify-content-lg-between'>
                <div className={`${re.merit} col-lg-5`}>
                    <div className={`${re.mTitle}`}>
                        <p className={`mb-0`}>고객 구매 만족도</p>
                        <div className={`d-flex`}>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div className={`${re.meritlist}`}>
                        {
                            props.info.contentsdb.review.checkbox.map((v, i) => {
                                return (
                                    <div>
                                        <img src={v.src} alt="checkbox" />
                                        <span>{v.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`${re.review} col`}>
                    <div className={`${re.rTitle}`}>
                        <p>real review</p>
                        <span>써본 사람들의 진짜 리뷰</span>
                    </div>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            type: 'progressbar',
                        }}
                        slidesPerView={'auto'}
                        freeMode={true}
                        mousewheel={true}
                        modules={[Pagination, FreeMode, Mousewheel]}
                        className={`mySwiper ${re.swiper}`}
                    >
                        {
                            props.info.contentsdb.review.reviewbox.map((v, i) => {
                                return (
                                    <SwiperSlide className={`${re.swiperslide}`}>
                                        <div className={`${re.reviewbox}`}>
                                            <div className={`${re.hd}`}>
                                                <div>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                </div>
                                                <div>
                                                    <span>{v.name}</span>
                                                </div>
                                            </div>
                                            <div className={`${re.body} d-flex`}>
                                                <img src={v.src} alt="review" />
                                                <div className={`${re.txt}`}>
                                                    {
                                                        v.re.split("<br>").map((val, idx) => {
                                                            return (
                                                                <p className={`re${idx}`}>{val}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                        }

                    </Swiper>
                </div>

            </div>

        </section>
    )
}

export default Review