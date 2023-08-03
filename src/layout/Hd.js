import React from 'react';
import hd from '../scss/hd.module.css';
function Hd(props) {
    return (
        <header id={props.id}>
            <div id='eventBanner' className={`${hd.topBanner}`}>
                {
                    props.info.hddb.banner.map((v, i) => {
                        return(
                            <a href={v.link} className={`py-2 d-flex justify-content-center align-items-center`}>
                                <p className={`m-0`}>{v.title}</p>
                                <span className={`ms-2 d-none d-sm-block`}>{v.sub}</span>
                            </a>
                        )
                    })
                }
            </div>
            <section id={`${hd.headSection}`} className={`d-flex justify-content-around align-items-center`}>
                <h1>
                    <a href="#home"><img className={`${hd.logoImg}`} src="./img/SVG/logo.svg" alt="logo" /></a>
                </h1>
                <nav>
                    <ul className={`${hd.menu} d-flex m-0 p-0 align-items-center`}>
                        {
                            props.info.hddb.navi.map((v, i) => {
                                return (
                                    <li><a href={v.link}>{v.title}</a></li>
                                )
                            })
                        }
                        {
                            props.info.hddb.special.map((v, i) => {
                                return(
                                    <li className={`${hd.eventMenu} px-2 py-1`}><a href={v.link}>{v.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <i className={`${hd.hamMenu} fa-solid fa-bars`}></i>
            </section>
        </header>
    );
}

export default Hd;