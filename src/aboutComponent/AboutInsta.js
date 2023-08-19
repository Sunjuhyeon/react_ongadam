import React, { useRef, useState } from 'react'
import abI from '../scss/aboutinsta.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import Instar from './Instar';

export const AboutInsta = (props) => {
    const [showpopup, setShowpopup] = useState(-1);

    const openPopup = (index) => {
        setShowpopup(index);
    };

    const closePopup = () => {
        setShowpopup(-1);
    }

    return (
        <section id={props.id} className={`${abI.sectionbg} position-relative`}>
            <div className='sectioncontainer'>
                <div className={`${abI.title} d-sm-flex`}>
                    <p className={`${abI.titlename} order-sm-2 ms-sm-3`}>@ongadam_official</p>
                    <p className={`${abI.maintitle} order-sm-1`}>INSTAGRAM</p>
                </div>
                <div>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={0}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {
                            props.info.contentsdb.about.aboutInsta.map((v, i) => {
                                return (
                                    <SwiperSlide onClick={() => setShowpopup(i)}>
                                        <div>
                                            <img src={v.src} alt="instaImg" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    {showpopup > -1 && (
                        <Instar 
                        className={`${abI.headpop}`} 
                        info={props.info.contentsdb.about.aboutInsta} 
                        num={showpopup}
                        closePopup={closePopup}
                        id="pop"
                        >
                        </Instar>
                        )}
                </div>
            </div>
        </section>
    )
}

export default AboutInsta