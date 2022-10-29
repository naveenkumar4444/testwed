import React, { useState, useEffect } from 'react'
import Styles from '../styles/Hero.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'



const Hero = () => {
    const [vendorTypes, setVendorTypes] = useState([
        'Vendor Type',
        'Venue',
        'Vendor',
    ])

    const [locations,setLocations] = useState([
        'All Location',
        'mohali',
        'punjab',
        'Uttar pradesh',
        'chandigarh'
    ])


    const [activeLocation,setActiveLocation] = useState(locations[0])

    const [activeVendor, setActiveVendor] = useState(vendorTypes[0])
    const [srcollTop, setScrollTop] = useState(false)
    const [showSelect, setShowSelect] = useState({ select1: false, select2: false })

    const { select1, select2 } = showSelect


    useEffect(() => {
        const scroll = window.addEventListener('scroll', () => {


            if (window.scrollY > 200) {
                setScrollTop(true)
            }

            else {
                setScrollTop(false)
            }
        })

        return (() => {
            window.removeEventListener('scroll', scroll)
        })
    })

    return (
        <div className={Styles.hero_container} >
            <div className={Styles.overlay}></div>
            <div className={`${Styles.hero_tagline_container} text-center`}>
                <h2 className={`${Styles.hero_title} text-white shadowed-text`}>Find Local Wedding Vendors</h2>
                <p className={`${Styles.hero_info} text-white`} >Browse the best wedding vendors in your area — from venues and photographers, to wedding planners, caterers, florists and more.</p>
            </div>
            <div className={Styles.input_fields_container}>
                <div className='row align-items-center gx-3 gy-3 gy-md-0'>
                    <div className="col-md-5 position-relative">
                        <div className={`${Styles.input_field} d-flex align-items-center justify-content-between `} onClick={() => setShowSelect({ select1: !select1 })} >
                            <span className="type">{activeVendor}</span>
                            <FaChevronDown />
                        </div>

                        <div className={`${Styles.search_dropdown} bg-white px-4 position-absolute pt-3`} style={{ transition: 'all 450ms', opacity: select1 ? '1 ' : '0', visibility: select1 ? 'visible' : 'hidden' ,cursor:'pointer' }} >
                            {vendorTypes.map((type, index) => {
                                    return (
                                        <span key={index} className={type===activeVendor?'text-black d-block pb-3 primary-text':'text-black d-block pb-3'} onClick={()=>{
                                            setActiveVendor(type)
                                            setShowSelect({ select1: !select1 })
                                            }}> {type}</span>
                                    )
                                })}

                        </div>

                    </div>
                    <div className="col-md-5 position-relative">
                        <div className="input_field_container">
                            <div className={`${Styles.input_field} d-flex align-items-center justify-content-between`} onClick={() => setShowSelect({ select2: !select2 })} >
                                <span className="type">{activeLocation}</span>
                                <FaChevronDown />
                            </div>

                            <div className={`${Styles.search_dropdown} bg-white p-4 position-absolute `} style={{ transition: 'all 450ms', opacity: select2 ? '1 ' : '0', visibility: select2 ? 'visible' : 'hidden',cursor:'pointer' }} >


                            {locations.map((location, index) => {
                                    return (
                                        <span key={index} className={location===activeLocation?'text-black d-block pb-3 primary-text':'text-black d-block pb-3'} onClick={()=>{
                                            setActiveLocation(location)
                                            setShowSelect({ select2: !select2 })
                                            }}> {location}</span>
                                    )
                                })}

                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="primary-btn w-100 d-block">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <button className={Styles.scroll_btn} style={{ transition: 'all 450ms', opacity: srcollTop ? '1' : '0' }} onClick={() => window.scrollTo('', '0px')}>
                <FaChevronUp />
            </button>
        </div>
    )
}

export default Hero