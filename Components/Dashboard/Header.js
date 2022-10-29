import { useEffect, useRef } from 'react'
import Styles from '../../styles/Dashboard/Header.module.css'
import Image from 'next/image'
import logo from '../../public/logo.jpeg'
import Link from 'next/link'
import NavStyles from "../../styles/Navbar.module.css";
import { FaChevronDown } from 'react-icons/fa'

import { useRouter } from 'next/router'

const Header = ({ setHeaderHeight }) => {
    const header = useRef(null)

    const router = useRouter()

    useEffect(() => {
        if (header) {
            setHeaderHeight(header.current.clientHeight)
        }
    }, [header])


    return (
        <div ref={header} className={Styles.header}>
            <div className="nav-container d-flex align-items-center">
                <div className="logo-container">
                    <Image
                        src={logo}
                        width={200}
                        height={30}
                        objectFit='contain'
                    />
                </div>

                <div className="d-flex nav-links-container align-items-center">
                    <div
                        className={`${NavStyles.nav_link} d-flex align-items-center text-white position-relative`}
                    >
                        <span className="d-block primary-text">Venues</span>
                        <span className={`d-block ms-2 primary-text ${NavStyles.chevron}`}>
                            <FaChevronDown />
                        </span>
                        <div className={NavStyles.dropdown}>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Hotel</a>
                            </Link>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Resort</a>
                            </Link>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Farm House</a>
                            </Link>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Lawn</a>
                            </Link>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Destination Wedding</a>
                            </Link>
                            <Link href="/venue">
                                <a className={NavStyles.dropdown_link}> Lawn</a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`${NavStyles.nav_link} d-flex align-items-center text-white position-relative`}
                    >
                        <span className="d-block primary-text">Vendors</span>
                        <span className={`d-block ms-2 primary-text ${NavStyles.chevron}`}>
                            <FaChevronDown />
                        </span>
                        <div className={`${NavStyles.dropdown} ${Styles.drop_center}`}>
                            <div className="drop-downlinks-container d-flex">
                                <div className={NavStyles.d_links_wrapper}>
                                    <span className="shadowed-text d-block text-black">
                                        Photgraphers
                                    </span>
                                    <div className={`d-links mt-2`}>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Resort</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Farm House</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={Styles.dropdown_link}> Lawn</a>
                                        </Link>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            Destination Wedding
                                        </a>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            {" "}
                                            Lawn{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className={NavStyles.d_links_wrapper}>
                                    <span className="shadowed-text d-block text-black">
                                        Photgraphers
                                    </span>
                                    <div className={`d-links mt-2`}>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Resort</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Farm House</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Lawn</a>
                                        </Link>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            Destination Wedding
                                        </a>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            {" "}
                                            Lawn{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className={NavStyles.d_links_wrapper}>
                                    <span className="shadowed-text d-block text-black">
                                        Photgraphers
                                    </span>
                                    <div className={`d-links mt-2`}>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Resort</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Farm House</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Lawn</a>
                                        </Link>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            Destination Wedding
                                        </a>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            {" "}
                                            Lawn{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className={NavStyles.d_links_wrapper}>
                                    <span className="shadowed-text d-block text-black">
                                        Photgraphers
                                    </span>
                                    <div className={`d-links mt-2`}>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Resort</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Farm House</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Lawn</a>
                                        </Link>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            Destination Wedding
                                        </a>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            {" "}
                                            Lawn{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className={NavStyles.d_links_wrapper}>
                                    <span className="shadowed-text d-block text-black">
                                        Photgraphers
                                    </span>
                                    <div className={`d-links mt-2`}>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Resort</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Farm House</a>
                                        </Link>
                                        <Link href="/venue">
                                            <a className={NavStyles.dropdown_link}> Lawn</a>
                                        </Link>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            Destination Wedding
                                        </a>
                                        <a href="#" className={NavStyles.dropdown_link}>
                                            {" "}
                                            Lawn{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${NavStyles.nav_link} d-flex align-items-center text-white position-relative`}
                    >
                        <span className="d-block primary-text">My profile</span>
                        <span className={`d-block ms-2 primary-text ${NavStyles.chevron}`}>
                            <FaChevronDown />
                        </span>
                        <div className={NavStyles.dropdown}>
                            <Link href="/dashboard">
                                <a className={NavStyles.dropdown_link}> Dashboard</a>
                            </Link>
                            <a href={"#"} onClick={() => {
                                localStorage.removeItem("wedcell")
                                localStorage.removeItem("role")
                                router.push("/")
                                location.reload(true)
                            }}>
                                <a className={NavStyles.dropdown_link}> logout</a>
                            </a>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Header