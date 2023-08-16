import React from 'react'
import re from '../scss/review.module.css'
import { Controller, Scene } from 'react-scrollmagic';


function Review(props) {
  return (
    <section id={props.id} className={`${re.section} d-flex`}>
      <div className={`${re.merit}`}>
        <p className={`mb-0`}>고객 구매 만족도</p>
        <div className={`d-flex`}>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>텀블러 크기의 미니 사이즈</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>저렴한 유지비용</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>옷 손상 최소화</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>신발 건조</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>UV살균 램프</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>제습, 탈취</p>
          </div>
          <div className={`d-flex`}>
            <i class="bi bi-check2-square"></i>
            <p>저소음</p>
          </div>
        </div>
      </div>
      <div className={`${re.reviewsection}`}>
        <div className={`${re.title}`}>
          <p>real review</p>
          <span>써본 사람들의 진짜 후기</span>
        </div>
        <div className={`${re.reviewwrap}`}>
          {
            props.info.contentsdb.review.map((v, i) => {
              return(
                <div key={i} className={`${re.reviewbox} box${i}`}>
                  <div>
                    <div className={`${re.hd}`}>
                      <div className={`d-flex`}>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>{v.name}</p>
                    </div>
                    <div className={`${re.body}`}>
                      <img src={v.src} alt="review0" />
                      <div>
                        {v.re.split("<br>").map((br, idx)=> {
                          return(
                            <p key={idx} className={`${re.bodytxt} re${idx}`}>
                              {br}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Review
