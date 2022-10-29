import React from 'react'
import Styles from '../styles/itempage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import 'swiper/css';



function ItemDetails() {

    const property = {
        imgUrl: 'https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/Muslim-Bride.jpg',


    };



        return(
            <>
            <div className={Styles.carousel}>
               
                <Swiper
                    loop={true}
                    modules={[Navigation, Thumbs]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={true}
                    grabCursor={true}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={Styles.swiper}
                    >
                    <SwiperSlide>
                            <img src={property.imgUrl} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={property.imgUrl} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={property.imgUrl} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={property.imgUrl} />
                    </SwiperSlide>
                    ...
                    </Swiper>
            </div>

            </>
        )
    }


export default ItemDetails;