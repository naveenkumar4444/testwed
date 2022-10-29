import React, { useEffect } from 'react'
import Image from 'next/image'
import Styles from '../../styles/Vendors.module.css'
import { MdLocationPin } from 'react-icons/md'
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from 'react-icons/gr'
import { FaPinterestP, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Gallery from '../../Components/Gallery'
import Albums from '../../Components/Albums'
import Videos from '../../Components/Videos'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GetVenues } from '../../redux/actions/HomeActions'
import axios from 'axios'
import { PROXY } from '../../config'

import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg"
import Table from 'react-bootstrap/Table';

const VenueDetails = () => {

    const dispatch = useDispatch()

    const [activeTab, setActiveTab] = useState('gallery')

    const [venue, setVenue] = useState({})

    const [show, setShow] = useState(false)

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {

        axios.post(
            `${PROXY}/item/getAll`,
            {
                type: "Venue",
                _id: id
            }
        ).then((res) => {
            setVenue(res.data.data[0])
        }).catch((e) => {
            console.log(e);
        })

    }, [id])

    console.log(venue);

    return (

        <div className='vendor-detail-container bg-grey ' >

            {venue &&
                <>
                    <div className={`${Styles.vendor_detail_wrapper} position-relative `}>
                        <div className={Styles.vendor_img_wrapper}>
                            <Image
                                //src={'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                                src={`${PROXY}/${venue.mainImage}`}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <div className={`${Styles.vendor_details} d-flex flex-column justify-content-end`}>
                            <div className="address-name-info d-flex align-items-center justify-content-between flex-wrap">

                                <div className="title-address">

                                    <h2>{venue.name}</h2>
                                    <div className="price-container d-flex align-items-center my-2 ">
                                        <span>Starting Price</span>
                                        <h4 className="price ms-5 fw-bold"> ₹ {venue.price}</h4>
                                    </div>
                                    <p>
                                        <span className='me-3 '>
                                            <MdLocationPin />
                                        </span>
                                        {venue.address}
                                    </p>
                                </div>
                                <div className="btn-container d-flex align-items-center flex-wrap gap-2">
                                    <a href={venue.brochure ? `${PROXY}/${venue.brochure[0]}` : "#"} className="secondary-btn fw-bold me-3" download>
                                        <span style={{
                                            color: "#681212"
                                        }}>Download Brochure</span>
                                    </a>
                                    <button className="primary-btn fw-bold">
                                        <span className='me-2'>+</span>
                                        Add To Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="gallery-container pb-5 bg-white box-shadow mb-4">
                                    <div className="tabs-container d-flex align-items-center">
                                        <div className={Styles.tab} style={{ backgroundColor: activeTab === 'gallery' ? '#fff' : '#f8f8f8', color: activeTab === 'gallery' ? 'hsla(0, 70%, 24%, 1)' : '#000' }} onClick={() => setActiveTab('gallery')} >
                                            <h5 className='fw-bold' >Gallery </h5>
                                        </div>
                                        <div className={Styles.tab} style={{ backgroundColor: activeTab === 'albums' ? '#fff' : '#f8f8f8', color: activeTab === 'albums' ? 'hsla(0, 70%, 24%, 1)' : '#000' }} onClick={() => setActiveTab('albums')} >
                                            <h5 className='fw-bold' >Albums </h5>
                                        </div>
                                        <div className={Styles.tab} style={{ backgroundColor: activeTab === 'videos' ? '#fff' : '#f8f8f8', color: activeTab === 'videos' ? 'hsla(0, 70%, 24%, 1)' : '#000' }} onClick={() => setActiveTab('videos')}>
                                            <h5 className='fw-bold' >Videos</h5>
                                        </div>
                                    </div>
                                    <div className="active-comp px-4 mt-4">
                                        {
                                            activeTab == 'gallery' && venue.images &&
                                            <Gallery images={venue.images} />
                                        }
                                        {
                                            activeTab == 'albums' && venue.albums &&
                                            <Albums albums={venue.albums} />
                                        }

                                        {

                                            activeTab == 'videos' && venue.vidLinks &&
                                            <Videos links={venue.vidLinks} />

                                        }

                                    </div>


                                </div>

                                <div className="terms box-shadow p-4 bg-white  mb-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >Vendor Allow Policy</h4>
                                    {venue.allowedVendors && venue.allowedVendors.length ?
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    {/* <th>#</th> */}
                                                    <th>Plan</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {venue.allowedVendors.map((am, key) => (
                                                    <tr key={key}>
                                                        {/* <td>{key + 1}</td> */}
                                                        <td>{am.name}</td>
                                                        <td>
                                                            <input type="checkbox" checked={am.value} />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <p style={{
                                            textAlign: 'center'
                                        }}>No Vendor Allow Policy found</p>
                                    }
                                </div>

                                <div className="terms box-shadow p-4 bg-white  mb-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >Halls</h4>
                                    {venue.amenities && venue.amenities.length ?
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    {/* <th>#</th> */}
                                                    <th>Name</th>
                                                    <th>Min-Capacity</th>
                                                    <th>Max-Capacity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {venue.amenities.map((am, key) => (
                                                    <tr key={key}>
                                                        {/* <td>{key + 1}</td> */}
                                                        <td>{am.name}</td>
                                                        <td>{am.min}</td>
                                                        <td>{am.max}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <p style={{
                                            textAlign: 'center'
                                        }}>No Halls found</p>
                                    }
                                </div>

                                <div className="terms box-shadow p-4 bg-white  mb-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >Plans / Packages</h4>
                                    {venue.plans && venue.plans.length ?
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    {/* <th>#</th> */}
                                                    <th>Name</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {venue.plans.map((plan, key) => (
                                                    <tr key={key}>
                                                        {/* <td>{key + 1}</td> */}
                                                        <td>{plan.name}</td>
                                                        <td>{plan.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <p style={{
                                            textAlign: 'center'
                                        }}>No Plans found</p>
                                    }
                                </div>

                                <div className="terms box-shadow p-4 bg-white  mb-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >Features</h4>
                                    {venue.features && venue.features.length ?
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    {/* <th>#</th> */}
                                                    <th>Name</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {venue.features.map((feature, key) => (
                                                    <tr key={key}>
                                                        {/* <td>{key + 1}</td> */}
                                                        <td>{feature.name}</td>
                                                        <td>
                                                            <input type="checkbox" checked={feature.value} />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <p style={{
                                            textAlign: 'center'
                                        }}>No Features found</p>
                                    }
                                </div>

                                <div className="terms box-shadow p-4 bg-white  mb-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >Terms And Conditions</h4>
                                    <p>{venue.termsandconditions}</p>
                                </div>
                                <div className="about-vendor bg-white box-shadow p-4">
                                    <h4 className='text-center primary-text mb-3 fw-bold' >About Vendor</h4>

                                    <p>{venue.description}</p>
                                </div>

                                <div className="box-shadow bg-white mt-4 py-3">
                                    <h4 className="fw-bold text-center primary-text">Reviews</h4>
                                    <div className="review-container d-flex flex-wrap justify-content-evenly">

                                        <div className="rating-container d-flex flex-column  justify-content-center">
                                            <span className={Styles.overall_rating} >
                                                <span className="me-2 fw-bold">0</span>
                                                <span className={Styles.overall_rating_icon}>
                                                    <AiFillStar />
                                                </span>
                                            </span>
                                        </div>

                                        <div className="ratings-stats  d-flex flex-column align-items-center ">

                                            <div className="rating-wrapper d-flex align-items-center mb-1">
                                                <span className={`text-gray ${Styles.rating_service}`}>Quality Service</span>
                                                <div className="stars-container d-flex align-items-center  justify-content-center ms-3">
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>


                                                </div>
                                                <span className='ms-2 fw-bold' > 3.0</span>
                                            </div>

                                            <div className="rating-wrapper d-flex align-items-center mb-1">
                                                <span className={`text-gray ${Styles.rating_service}`}>Facilities</span>
                                                <div className="stars-container d-flex align-items-center  justify-content-center ms-3">
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>


                                                </div>
                                                <span className='ms-2 fw-bold' > 3.0</span>
                                            </div>

                                            <div className="rating-wrapper d-flex align-items-center mb-1">
                                                <span className={`text-gray ${Styles.rating_service}`}>Staff Service</span>
                                                <div className="stars-container d-flex align-items-center  justify-content-center ms-3">
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>


                                                </div>
                                                <span className='ms-2 fw-bold' > 3.0</span>
                                            </div>

                                            <div className="rating-wrapper d-flex align-items-center mb-1">
                                                <span className={`text-gray ${Styles.rating_service}`}>Flexibility</span>
                                                <div className="stars-container d-flex align-items-center  justify-content-center ms-3">
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>


                                                </div>
                                                <span className='ms-2 fw-bold' > 3.0</span>
                                            </div>

                                            <div className="rating-wrapper d-flex align-items-center mb-1">
                                                <span className={`text-gray ${Styles.rating_service}`}>Value  Of Money</span>
                                                <div className="stars-container d-flex align-items-center  justify-content-center ms-3">
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span><span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>
                                                    <span className={`text-gray fs-5 me-2`}>
                                                        <AiFillStar />
                                                    </span>


                                                </div>
                                                <span className='ms-2 fw-bold' > 3.0</span>
                                            </div>


                                        </div>

                                    </div>
                                </div>

                                <div className="box-shadow bg-white mt-4 p-4">
                                    <h4 className="text-center fw-bold primary-text">Write A Review</h4>

                                    <div className="form-container">
                                        <div className="py-5 rating">
                                            <span className='d-block text-center' >Select Rating</span>

                                            <div className="stars-container d-flex align-items-center my-3 justify-content-center">
                                                <span className={`${Styles.rating_icon} me-2`}>
                                                    <AiFillStar />
                                                </span>
                                                <span className={`${Styles.rating_icon} me-2`}>
                                                    <AiFillStar />
                                                </span><span className={`${Styles.rating_icon} me-2`}>
                                                    <AiFillStar />
                                                </span><span className={`${Styles.rating_icon} me-2`}>
                                                    <AiFillStar />
                                                </span><span className={`${Styles.rating_icon} `}>
                                                    <AiFillStar />
                                                </span>

                                            </div>

                                            <div className="field-container mb-3">
                                                <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                            </div>

                                            <div className="row gy-4">

                                                <div className="col-md-6">

                                                    <div className="field-container mb-3">
                                                        <input type="text" className="form-control py-3" placeholder='Name' />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="field-container mb-3">
                                                        <input type="text" className="form-control py-3" placeholder='Email' />
                                                    </div>
                                                </div>

                                            </div>

                                            <button className="primary-btn mt-3 mx-auto d-block">Submit Review</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="contact-btn-container box-shadow py-5 px-3 bg-white">

                                    <button onClick={() => {
                                        setShow(!show)
                                    }} className={`primary-btn w-100 fw-bold ${Styles.rounded_btn}`}>
                                        View Contact
                                    </button>
                                    {show &&
                                        <>
                                            <br /><br />
                                            <div style={{
                                                padding: "10px"
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                }}>
                                                    <BsFillTelephoneFill color='#681212' size={20} />
                                                    <h5>{venue.contactPhone}</h5>
                                                </div>
                                                <hr />
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-around'
                                                }}>
                                                    <CgMail color='#681212' size={20} />
                                                    <h5>{venue.contactEmail}</h5>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className="social-media-wrapper mt-4">
                                    <h5 className='fw-bold'  >Share This</h5>

                                    <div className="social-media-links d-flex mt-4">
                                        <button className={` me-2 ${Styles.indigo} ${Styles.social_icon_btn} `}>
                                            <GrFacebookOption className='mb-1' />
                                        </button>

                                        <button className={`me-2 ${Styles.insta} ${Styles.social_icon_btn} `}>
                                            <GrInstagram className='mb-1' />
                                        </button>

                                        <button className={`me-2 ${Styles.linked_in} ${Styles.social_icon_btn} `}>
                                            <GrLinkedinOption className='mb-1' />
                                        </button>

                                        <button className={` me-2 ${Styles.linked_in} ${Styles.social_icon_btn} `}>
                                            <FaPinterestP className='mb-1' />
                                        </button>
                                        <button className={` ${Styles.indigo} ${Styles.social_icon_btn} `}>
                                            <FaWhatsapp className='mb-1' />
                                        </button>


                                    </div>


                                </div>

                                <div className="request-quote-container bg-white box-shadow px-3 py-3 mt-4">
                                    <h5 className="title fw-bold">Request Quote</h5>
                                    <div className="form-container mt-4">
                                        <div className="input-container mb-3">
                                            <input type="text" placeholder='Name' className="form-control" />
                                        </div>
                                        <div className="input-container mb-3">
                                            <input type="text" placeholder='Email' className="form-control" />
                                        </div><div className="input-container mb-3">
                                            <input type="text" placeholder='Phone' className="form-control" />
                                        </div><div className="input-container mb-3">
                                            <input type="date" placeholder='Name' className="form-control" />
                                        </div>
                                        <div className="input-container mb-3 ">
                                            <input type="time" name="Select Time" id="" className='form-control' />
                                        </div>
                                        <div className="input-container mb-3 ">
                                            <input type="text" placeholder='Types Of Events' className='form-control' />
                                        </div>

                                        <div className="input-container mb-3 ">
                                            <input type="number" placeholder='0' className='form-control' />
                                        </div>

                                        <div className="input-container mb-3 ">
                                            <textarea name="" className='form-control' id="" cols="30" rows="5" ></textarea>
                                        </div>

                                        <button className="primary-btn fw-bold w-100 mt-4">
                                            Submit Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default VenueDetails