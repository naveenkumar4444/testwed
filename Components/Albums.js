import React, { useState } from 'react'
import Styles from '../styles/Vendors.module.css'
import Image from 'next/image'
import { PROXY } from '../config'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

const Albums = ({ albums }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const [album, setAlbum] = useState([])

    return (

        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div>
                        <Carousel>
                            {
                                album.map((image, key) => (
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

            <div className='row g-3'>
                {albums.length ?
                    albums.map((album, key) => (
                        <div style={{
                            cursor: 'pointer'
                        }} key={key} className="col-md-6">
                            <div onClick={() => {
                                setAlbum(album.images)
                                handleShow()
                            }} className={`${Styles.albums_img_wrapper} position-relative overflow-hidden`}>
                                <Image
                                    src={`${PROXY}/${album.images[0]}`}
                                    layout='fill'
                                    objectFit='cover'
                                />
                                <div className={`${Styles.album_overlay} pb-1 px-4 d-flex flex-column justify-content-end`}>
                                    <h5 className="text-white fw-bold">{album.name ? album.name : "album name"}</h5>
                                    {/* <span className="text-white">Banglore</span>
                            <p className="text-white">Greens Oranges and Sunshine this morning.</p> */}
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
                            <h2>No Albums found</h2>
                        </div>
                    </>
                }

            </div>

        </>
    )
}

export default Albums