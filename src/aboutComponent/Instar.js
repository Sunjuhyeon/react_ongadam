import React from 'react'
import abI from '../scss/aboutinsta.module.css'

function Instar(props) {
    const popupData = props.info[props.num].popup;

    return (
        <section>
                <div className={`${abI.windowbg}`}></div>
                <div className={`${abI.popup}`}>
                    <div className='position-relative py-5 px-5 h-100'>
                        <div className={`popupclose`} onClick={props.closePopup}></div>
                        <div className={`${abI.popupbox} d-lg-flex justify-content-center align-items-center`}>
                            <div className={`popupleft`}>
                                <div className={`${abI.popupImg}`}>
                                    <img src={popupData.src} alt="popupimg" />
                                </div>
                            </div>
                            <div className={`popupright ${abI.popupright} ps-5`}>
                                <div className={`${abI.popuptop}`}>
                                    <p className={`${abI.popkeyword}`}>KEYWORD</p>
                                    <div className={`${abI.poptext}`}>
                                        <span>@ongadam_official</span>
                                        <p>
                                            {popupData.title}
                                        </p>
                                    </div>
                                    <div className={`${abI.pophash}`}>
                                        <p>
                                            {popupData.hash}
                                        </p>
                                    </div>
                                </div>
                                <div className={`${abI.popupbottom}`}>
                                    <p className={`${abI.goshoptitle}`}>상품보러가기</p>
                                    <div>
                                        <a href="">
                                            <img src={popupData.src} alt="product" />
                                        </a>
                                    </div>
                                    <div className={`${abI.goshopname}`}>
                                        <a href="">
                                            <p>{popupData.product}</p>
                                            <strong>{popupData.price}</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* // <div>{props.info[props.num].popup.title}</div> */}
            </div>
        </section>
        
    )
}

export default Instar