
import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Vendors.module.css'
import { AiTwotoneHeart, AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/router'
const Venue = () => {
    const router = useRouter()
  return (
    <div className='vendor-list-container bg-grey py-60' >
    <div className="container">
        <div className="row">

            <div className="col-md-8">

                <div className={`${Styles.v_card} box-shadow mb-4 bg-white`} onClick={()=>router.push(`/venue/${'photographer'}`)}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${Styles.card_img_wrapper} position-relative overflow-hidden`}>
                                <Image
                                    src={'https://www.wedcell.com/assetss/images/product_image/61adecbd280b8.jfif'}
                                    layout='fill'
                                    objectFit='cover'
                                />

                                <div className={Styles.icon_wrapper}>

                                    <AiTwotoneHeart />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-info p-3 d-flex flex-column h-100 justify-content-center">
                                <h4 className="vendor_name primary-text fw-bold">Maltani Collection</h4>
                                <p className='text-gray' >Shop No.18, Central Market, Veer Savarkar Marg, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024...</p>
                                <div className="price-container d-flex align-items-center">
                                    <span className="fw-semi">
                                        Starting price
                                    </span>

                                    <h5 className="price fw-bold ms-5">
                                        ₹ 5000
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${Styles.v_card} box-shadow mb-4 bg-white`} onClick={()=>router.push(`/vendors/${'photographer'}`)}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${Styles.card_img_wrapper} position-relative overflow-hidden`}>
                                <Image
                                    src={'https://www.wedcell.com/assetss/images/product_image/61adecbd280b8.jfif'}
                                    layout='fill'
                                    objectFit='cover'
                                />
                                <div className={Styles.icon_wrapper}>

                                    <AiTwotoneHeart />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-info p-3  d-flex flex-column h-100 justify-content-center"  >
                                <h4 className="vendor_name primary-text fw-bold">Maltani Collection</h4>
                                <p className='text-gray' >Shop No.18, Central Market, Veer Savarkar Marg, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024...</p>
                                <div className="price-container d-flex align-items-center">
                                    <span className="fw-semi">
                                        Starting price
                                    </span>

                                    <h5 className="price fw-bold ms-5">
                                        ₹ 5000
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4">
                <div className={`${Styles.filter_card} box-shadow px-3  py-4 bg-white`}>
                    <div className="filter-title-container">
                        <h5>Filters</h5>
                        <hr />
                    </div>
                    <div className="filters mt-4">
                        <div className={`${Styles.search_container} box-shadow d-flex align-item-center py-3 mb-3`}>
                            <span className="search line-normal">
                                <AiOutlineSearch />
                            </span>
                            <input type="text" className={Styles.search_field} placeholder='Search Anything' />
                        </div>

                        <select name="" id="" className="form-control box-shadow py-2 border-none py-3 mb-3">
                            <option value=""> Vendor  Type</option>
                            <option value=""> Photographers</option>
                            <option value=""> Photographers</option>
                            <option value=""> Photographers</option>
                        </select>

                        <select name="" id="" className="form-control box-shadow py-2 border-none py-3 mb-3">
                            <option value="">Delhi</option>
                        </select>

                        <div className="range wrapper">
                            <label htmlFor="customRange1" className="form-label text-gray">Price Range +1000 </label>
                            <input type="range" class="form-range" id="customRange1"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Venue