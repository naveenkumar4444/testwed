import React, { useEffect, useState } from 'react'
import Styles from '../../styles/Dashboard/Dashboard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PROXY } from '../../config'

const MainDashboard = () => {

    const router = useRouter()

    const [user, setUser] = useState()

    const [config, setConfig] = useState()

    const [data, setData] = useState()

    const FetchData = (user, con) => {

        axios
            .post(
                `${PROXY}/item/get`,
                {
                    _id: user.data._id,
                },
                con,
            )
            .then(res => {
                if (res.data.success) {
                    setData(res.data.data)
                } else {
                    console.log('api call failed')
                }
            })
            .catch(e => alert('Someting went wrong: check your connection', e))
    }

    useEffect(() => {
        const auth = localStorage.getItem("wedcell")
        const role = localStorage.getItem("role")
        setUser(JSON.parse(auth))

        if (auth) {
            const config = {
                headers: { authorization: JSON.parse(auth).data.token },
            }
            setConfig(config)
            FetchData(JSON.parse(auth), config)
        }

        if (!auth || JSON.parse(role).role !== "Vendor") {
            router.push("/")
        }

    }, [])

    return (
        <div>
            <div className={`dashboard-header py-3 px-4 bg-white text-capitalize ${Styles.border_3}`}>
                <h3>Hi, {user ? user.data.name : ""}</h3>
                <span className="text-gray d-block ">
                    Here’s what’s happening with your wedding venue business today.
                </span>
            </div>
            <div className="cards-container mt-4">
                <div className="row gy-3 px-0">
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">
                            <span className="fs-1 fw-bold primary-text">
                                {data ? data.length : 0}
                            </span>
                            <span className="text-gray d-block">
                                Total Listed Item
                            </span>
                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">

                            <span className="fs-1 fw-bold primary-text">
                                1
                            </span>
                            <span className="text-gray d-block">
                                Your Reviews
                            </span>

                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-shadow bg-white py-3 px-5">
                            <span className="fs-1 fw-bold primary-text">
                                2
                            </span>
                            <span className="text-gray d-block">
                                Request Quote
                            </span>
                            <Link href={'#'}>
                                <a className='mt-5 text-center d-block'>
                                    View All
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container mt-4">
                <div className="row gy-3 px-0">
                    <div className="col-md-6">
                        <div className="box-shadow bg-white venues-card py-3 px-4">
                            <div className="venue-card-header d-flex align-items-center justify-content-between">
                                <h5 className="primary-text fw-bold">Venues/Listing</h5>
                                {/* <Link href={user ? `/dashboard/${user.data._id}` : "/dashboard"}>
                                    <span className='fs-3 cursor-pointer'>
                                        +
                                    </span>
                                </Link> */}
                                <Link href={{
                                    pathname: user ? `/dashboard/${user.data._id}` : "/dashboard",
                                    query: { name: 'add' },
                                }}>
                                    <span className='fs-3 cursor-pointer'>
                                        +
                                    </span>
                                </Link>
                            </div>

                            {/* <div className="list-container mt-4">
                                <div className="list-item  mb-3">
                                    <div className="list-item-title d-flex align-items-center justify-content-between">
                                        <span className='fw-semi'>
                                            Beauty Zone
                                        </span>

                                        <Link href={`/dashboard/${'124'}`}>
                                            <a className='primary-text '>
                                                Edit
                                            </a>
                                        </Link>

                                    </div>
                                    <p className='text-gray'>
                                        H.no 5403 gali no 205 parvatiya colony shona road peer baba ne
                                    </p>
                                </div>
                            </div> */}

                            {data && data.map((data, key) => (
                                <div key={key} className="list-container mt-4">
                                    <div className="list-item  mb-3">
                                        <div className="list-item-title d-flex align-items-center justify-content-between">
                                            <Link href={data.type === 'Vendor' ? `${data.type.toLowerCase()}s/${data._id}` : `/venue/${data._id}`}>
                                                <span className='fw-semi' style={{
                                                    cursor: "pointer"
                                                }}>
                                                    {data.type} / {data.name} / {data.category}
                                                </span>
                                            </Link>
                                            <Link href={{
                                                pathname: user ? `/dashboard/${user.data._id}` : "/dashboard",
                                                query: { name: 'edit', id: data.id },
                                            }}>
                                                <a className='primary-text '>
                                                    Edit
                                                </a>
                                            </Link>

                                        </div>
                                        <p className='text-gray'>
                                            {data.address ? data.address : "No address available"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                        {/* <div className="bg-white box-shadow add-video-card py-3 px-4 d-flex alig-items-center">
                            <input type="text" className={`form-control ${Styles.radius_0}`} placeholder='Enter Url Of Video ' />
                            <button className="primary-sm-btn">Add Video</button>
                        </div> */}

                        <div className="bg-white box-shadow px-4 py-2 payment-container mt-2">
                            <div className="payment-title my-4">
                                <h5 className="primary-text fw-bold">Payments</h5>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                            <div className="payment d-flex align-items-center mb-3">
                                <span className="paid-money text-success">
                                    + 5000
                                </span>
                                <h6 className='mb-0 fw-bold ms-4'>Acro Technologies</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard