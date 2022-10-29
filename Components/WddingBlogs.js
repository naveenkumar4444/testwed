import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from '../Components/CustomButton'
import Styles from '../styles/PopularMakeup.module.css'
import Image from 'next/image';
const WddingBlogs = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
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
    <div className="py-60" >
            <div className=" px-4">

                <div className="title-container text-center">
                    <h2>Wedding Blogs</h2>
                    <p className='text-gray'>
                    The ultimate wedding guide and tips for wedding couples.
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
                                src={'https://www.wedcell.com/assetss/images/blogs/61a2336558193.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3 text-center">
                               <span className='fw-bold' >Book your dreamlike wedding at Farmhouse!...</span>
                            <span className="text-gray d-block">Farm House</span>
                        </div>
                    </div>

                    <div className={`${Styles.cr_container} box-shadow`} >
                        <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                            <Image
                                src={'https://www.wedcell.com/assetss/images/blogs/61a2336558193.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3 text-center">
                               <span className='fw-bold' >Book your dreamlike wedding at Farmhouse!...</span>
                            <span className="text-gray d-block">Farm House</span>
                        </div>
                    </div>

                    <div className={`${Styles.cr_container} box-shadow`} >
                        <div className={`${Styles.cr_img_wrapper} w-100 position-relative`}>
                            <Image
                                src={'https://www.wedcell.com/assetss/images/blogs/61a2336558193.jpg'}
                                layout='fill'
                                objectFit='cover'
                            />

                        </div>
                        <div className="cr-body p-3 text-center">
                               <span className='fw-bold' >Book your dreamlike wedding at Farmhouse!...</span>
                            <span className="text-gray d-block">Farm House</span>
                        </div>
                    </div>

                    

                  


                </Carousel >
            </div>

        </div >
  )
}

export default WddingBlogs