import React from 'react';
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from '../Card';

SwiperCore.use(Pagination)
function Slider(){
    return(
        <Swiper slidesPerView={1}

        breakpoints={{
            767:{
                slidesPerView: 2
            },
            1024:{
                slidesPerView: 4
            } 
       }}         
        >            
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>            
        </Swiper>
    )
}

export default Slider