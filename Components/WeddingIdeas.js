import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from '../Components/CustomButton'
import Styles from '../styles/PopularMakeup.module.css'
import Image from 'next/image';

const WeddingIdeas = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
    <div className="py-60 " >
            <div className=" px-4">

                <div className="title-container text-center">
                    <h2>Get Inspired from Amazing Wedding Ideas!</h2>
                    <p className='text-gray'>
                        A short description for showcase of Popular Make up.
                    </p>
                </div>


                <Carousel
                    responsive={responsive}
                    infinite={true}
                    ssr={true}
                    swipeable={true}
                    draggable={true}
                    arrows={false}
                    centerMode={true}
                    customButtonGroup={<CustomButton />}
                    itemClass={Styles.carousel_item}
                    containerClass={'py-5'}
                >
                    

                    <div className={`${Styles.cr_container} box-shadow`} >
                        <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                            <Image
                                src={'https://www.wedcell.com/assetss/images/blogs/618d3b284e80d.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3">
                               <span className='fw-bold' >SAY YES TO VIRTUAL SHOPPING WITH WEDCELL</span>
                            <span className="text-gray d-block">Mehndi</span>
                        </div>
                    </div>

                    <div className={`${Styles.cr_container} box-shadow`} >
                        <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                            <Image
                                src={'https://www.wedcell.com/assetss/images/blogs/618d3b284e80d.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3">
                               <span className='fw-bold' >SAY YES TO VIRTUAL SHOPPING WITH WEDCELL</span>
                            <span className="text-gray d-block">Mehndi</span>
                        </div>
                    </div>

                    <div className={`${Styles.cr_container} box-shadow`} >
                        <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                            <Image
                                src={'https://www.wedcell.com/assetss/images/blogs/618d3b284e80d.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3">
                               <span className='fw-bold' >SAY YES TO VIRTUAL SHOPPING WITH WEDCELL</span>
                            <span className="text-gray d-block">Mehndi</span>
                        </div>
                    </div>

                  


                </Carousel >
            </div>

        </div >
  )
}

export default WeddingIdeas