import React from 'react'
import abI from '../scss/aboutinsta.module.css'

function Instar(props) {
    const popupData = props.info[props.num].popup;

    return (
        <div className='popup'>
            <div className={`${abI.windowbg}`}></div>
            <div className={`${abI.popup}`}>
                <div className='poprel position-relative py-3 py-sm-5 px-sm-5 h-100'>
                    <div className={`popupclose ${abI.close}`} onClick={props.closePopup}></div>
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
                                        <img src={popupData.productimg} alt="product" />
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
            </div>
        </div>
        
    )
}

export default Instar