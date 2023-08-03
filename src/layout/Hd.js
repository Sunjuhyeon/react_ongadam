import React from 'react';
import hd from '../scss/hd.module.css';
function Hd(props) {
    return (
        <header id={props.id}>
            <div id='eventBanner' className={`${hd.topBanner}`}>
                <a href="#kakao" className={`py-2 d-flex justify-content-center align-items-center`}>
                    <p className={`m-0`}>카카오 채널 추가하고 3000원 할인쿠폰 받자!!</p>
                    <span className={`ms-2 d-none d-sm-block`}>클릭 시 카카오 채널 바로가기</span>
                </a>
            </div>
            <section id={`${hd.headSection}`} className={`d-flex justify-content-around align-items-center`}>
                <h1>
                    <a href="#home"><img className={`${hd.logoImg}`} src="./img/SVG/logo.svg" alt="logo" /></a>
                </h1>
                <nav>
                    <ul className={`${hd.menu} d-flex m-0 p-0 align-items-center`}>
                        <li><a href="#event-section">이벤트 소식</a></li>
                        <li><a href="#aboutUs-section">About Us</a></li>
                        <li><a href="">솔직리뷰</a></li>
                        <li className={`${hd.eventMenu} px-2 py-1`}><a href="">체험 이벤트 신청</a></li>
                    </ul>
                </nav>
                <i className={`${hd.hamMenu} fa-solid fa-bars`}></i>
            </section>
        </header>
    );
}

export default Hd;