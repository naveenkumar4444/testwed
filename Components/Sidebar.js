import React, { useEffect, useState } from 'react'
import Styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const [auth, setAuth] = useState()
    const [role, setRole] = useState()

    const router = useRouter()

    useEffect(() => {
        const auth = localStorage.getItem("wedcell")
        const role = JSON.parse(localStorage.getItem("role"))
        setAuth(auth)
        setRole(role)

    }, [auth])

    return (
        <div className={Styles.sidebar_container} style={{ transition: 'all 450ms', transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)' }} >
            <div className="sidebar-header d-flex justify-content-between align-items-center  px-3">
                <div className="logo-container">
                    <Image
                        src={'https://www.wedcell.com/assets/front/images/logo.png'}
                        width='100'
                        height='57'
                        objectFit='contain'
                    />
                </div>
                <button className="clos-btn btn p-0 text-white" onClick={() => setIsSidebarOpen(false)}>
                    <AiOutlineClose />
                </button>
            </div>

            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Venues
                </span>

                <span className={`d-block ${Styles.icon}`} >
                    <BiChevronDown />
                </span>
            </div>
            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Shops
                </span>

                <span className={`d-block ${Styles.icon}`} >
                    <BiChevronDown />
                </span>
            </div>
            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <span className='d-block' >
                    Vedors
                </span>

                <span className={`d-block ${Styles.icon}`} >
                    <BiChevronDown />
                </span>
            </div>

            <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                <a href="#">
                    Blogs
                </a>
            </div>



            {auth ?
                <div className={`${Styles.links_container} d-flex align-items-center text-white  w-100 justify-content-between `}>
                    {role.role === "Vendor" ?
                        <Link href="/dashboard">
                            <a href='#' className='d-block' >
                                <br />
                                Account
                            </a>
                        </Link>
                        : <a href={"#"} onClick={() => {
                            localStorage.removeItem("wedcell")
                            localStorage.removeItem("role")
                            location.reload(true)
                            router.push("/")
                        }}>
                            <div>
                                <br />
                                <a href="#">
                                    Logout
                                </a>
                            </div>
                        </a>
                    }
                </div>
                :
                <div className={`${Styles.links_container} d-flex align-items-center text-white position-relative  w-100 justify-content-between `}>
                    <span className='d-block' >
                        Login
                    </span>

                    <span className={`d-block ${Styles.icon}`} >
                        <BiChevronDown />
                    </span>

                    <div className={Styles.dropdown}>
                        <Link href="/vendor-login">
                            <a className={Styles.dropdown_link}> Vendor Login </a>
                        </Link>
                        <Link href="/customer-login">
                            <a className={Styles.dropdown_link}> Customer Login </a>
                        </Link>
                    </div>

                </div>
            }
        </div>
    )
}

export default Sidebar