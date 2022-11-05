import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'
// Import Swiper React components

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Navigation, Pagination } from 'swiper'
import { Container } from '@mui/material'

// import required modules
function Carousel() {
    return (
        <Container>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{
                    '--swiper-navigation-size': '20px'
                }}>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://source.unsplash.com/random" alt="" />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel
