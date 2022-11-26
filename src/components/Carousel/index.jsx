import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import bannerImg1 from '@/assets/img/b1.jpg'
import bannerImg2 from '@/assets/img/b2.jpg'
import bannerImg3 from '@/assets/img/b3.jpg'

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
                slidesPerView={1}
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
                    <img src={bannerImg1} alt="banner1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImg2} alt="banner2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImg3} alt="banner3" />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel
