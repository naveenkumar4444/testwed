import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Styles from '../styles/Vendors.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { PROXY } from '../config'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

const Gallery = ({ images }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div>
                        <Carousel>
                            {
                                images.map((image, key) => (
                                    <div key={key} className={`${Styles.my_gal_wrapper} position-relative overflow-hidden`}>
                                        <Image
                                            src={`${PROXY}/${image}`}
                                            // alt="image"
                                            layout='fill'
                                            objectFit='cover'
                                        />

                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </Modal.Body>

            </Modal>

            {/* <div>
                <Carousel>
                    {
                        images.map((image, key) => (
                            <div key={key} className={`${Styles.my_gal_wrapper} position-relative overflow-hidden`}>
                                <Image
                                    src={`${PROXY}/${image}`}
                                    // alt="image"
                                    layout='fill'
                                    objectFit='cover'
                                />

                            </div>
                        ))
                    }
                </Carousel>
            </div> */}

            <div className='row g-2'>

                {
                    images.length ?
                        images.map((image, key) => (
                            <div key={key} className="col-md-4">
                                <div onClick={handleShow} className={`${Styles.gallery_img_wrapper} position-relative overflow-hidden`}>
                                    <Image
                                        src={`${PROXY}/${image}`}
                                        // alt="image"
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                    <div className={Styles.gallery_overlay}>
                                        <span className="icon">
                                            <AiOutlineSearch />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <h2>No images found</h2>
                            </div>
                        </>
                }
            </div >

        </>
    )
}

export default Gallery