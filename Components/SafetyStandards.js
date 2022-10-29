import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from './CustomButton';
import Styles from '../styles/SafetyStandards.module.css'
import Link from 'next/link'

const SafetyStandards = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg-grey py-3'>
            <div className="container">

                <div className="header d-flex align-items-start justify-content-between">
                    <div className="title">
                        <div className="title-wrapper d-flex align-items-center">
                            <Image
                                src={'https://www.wedcell.com/assets/front/images/safety.png'}
                                width={44}
                                height={41}
                                objectFit="contain"
                            />
                            <h4 className='mb-0 ms-3 f-bold primary-text'> WedCell safety standards</h4>
                        </div>
                        <h5 className='text-gray mt-3 f-regular'>Hire vendor as per covid guidelines standards.</h5>
                    </div>

                    <Link href={'#'}>
                        <a href="#" className={`d-flex ${Styles.learn_link}  align-items-center text-gray`}>
                            Learn More
                            <FaChevronRight />
                        </a>
                    </Link>
                </div>
                <div className="carousel-container mt-5 position-raltive">

                    <Carousel responsive={responsive}
                        infinite={true}
                        ssr={true}
                        showDots={false}
                        draggable={false}
                        swipeable={true}
                        arrows={false}
                        customButtonGroup={<CustomButton />}
                        itemClass={Styles.carousel_item}
                        containerClass={'py-5'}
                    >
                        <div className={`${Styles.cr_card} d-flex align-items-start`} >
                            <div className={Styles.card_img_container}>
                                <div className={`${Styles.card_img_wrapper} position-relative`}>
                                    <Image
                                        src={'https://www.wedcell.com/assets/front/images/arogya-setu.png'}
                                        layout={'fill'}
                                        objectFit='contain'
                                        className='card-img'
                                    />
                                </div>
                            </div>
                            <div className="cr-card-info ms-3">
                                <span className="shadowed-text cr-title f-bold">Use Arogya Setu App</span>
                                <p>
                                    Using Arogya Setu App is mandatory for the safety of one and all. It helps to keep a track of people you have come in close proximity, if anyone tests COVID-19 positive.
                                </p>
                            </div>

                        </div>

                        <div className={`${Styles.cr_card} d-flex align-items-start`} >
                            <div className={Styles.card_img_container}>
                                <div className={`${Styles.card_img_wrapper} position-relative`}>
                                    <Image
                                        src={'https://www.wedcell.com/assets/front/images/arogya-setu.png'}
                                        layout={'fill'}
                                        objectFit='contain'
                                        className='card-img'
                                    />
                                </div>
                            </div>
                            <div className="cr-card-info ms-3">
                                <span className="shadowed-text cr-title f-bold">Use Arogya Setu App</span>
                                <p>
                                    Using Arogya Setu App is mandatory for the safety of one and all. It helps to keep a track of people you have come in close proximity, if anyone tests COVID-19 positive.
                                </p>
                            </div>

                        </div>

                        <div className={`${Styles.cr_card} d-flex align-items-start`} >
                            <div className={Styles.card_img_container}>
                                <div className={`${Styles.card_img_wrapper} position-relative`}>
                                    <Image
                                        src={'https://www.wedcell.com/assets/front/images/arogya-setu.png'}
                                        layout={'fill'}
                                        objectFit='contain'
                                        className='card-img'
                                    />
                                </div>
                            </div>
                            <div className="cr-card-info ms-3">
                                <span className="shadowed-text cr-title f-bold">Use Arogya Setu App</span>
                                <p>
                                    Using Arogya Setu App is mandatory for the safety of one and all. It helps to keep a track of people you have come in close proximity, if anyone tests COVID-19 positive.
                                </p>
                            </div>

                        </div>

                        <div className={`${Styles.cr_card} d-flex align-items-start`} >
                            <div className={Styles.card_img_container}>
                                <div className={`${Styles.card_img_wrapper} position-relative`}>
                                    <Image
                                        src={'https://www.wedcell.com/assets/front/images/arogya-setu.png'}
                                        layout={'fill'}
                                        objectFit='contain'
                                        className='card-img'
                                    />
                                </div>
                            </div>
                            <div className="cr-card-info ms-3">
                                <span className="shadowed-text cr-title f-bold">Use Arogya Setu App</span>
                                <p>
                                    Using Arogya Setu App is mandatory for the safety of one and all. It helps to keep a track of people you have come in close proximity, if anyone tests COVID-19 positive.
                                </p>
                            </div>

                        </div>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default SafetyStandards