import { useState } from 'react'
import styled from 'styled-components'
// Import Swiper React components
import PLACE_HOLDER_IMG from '@/assets/img/placeholder.png'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './styles.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

const Styled = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
        background: none;
        padding: 0;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
    }

    .mySwiper2 {
        height: 400px;
        width: 100%;
    }

    .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
    }

    .mySwiper .swiper-slide {
        width: 25%;
        height: 70px;
        opacity: 0.5;
    }

    .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ,
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 1rem;
        font-weight: bold;
    }
    .swiper-button-next,
    .swiper-button-prev {
        background-color: white;
        background-color: rgba(255, 255, 255, 0.5);
        /* right: 10px; */
        height: 20px;
        width: 20px;
        color: #000 !important;
        fill: black !important;
        stroke: black !important;
        border-radius: 50%;
    }
`

export default function ThumbGalerry({ ...props }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <Styled>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff'
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2">
                <SwiperSlide>
                    <img
                        src={props.photoMainURl}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoOnceURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoSecondURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoThirdURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper">
                <SwiperSlide>
                    <img
                        src={props.photoMainURl}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoOnceURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoSecondURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={props.photoThirdURL}
                        onError={(e) => (e.target.src = PLACE_HOLDER_IMG)}
                    />
                </SwiperSlide>
            </Swiper>
        </Styled>
    )
}
