import React, { useState, useEffect, useRef } from "react";
import Styles from "../styles/Navbar.module.css";
import { FaChevronDown } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Getallitems } from "../redux/actions/HomeActions";

import { useRouter } from "next/router";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [auth, setAuth] = useState('')
  const [role, setRole] = useState('')

  const router = useRouter()

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("wedcell")
    const role = JSON.parse(localStorage.getItem("role"))
    setAuth(auth)
    setRole(role)

  }, [auth])

  return (
    <div
      className="nav-bar-wrapper w-100"
      style={{
        transition: "all 450ms",
        position: show ? "fixed" : "relative",
        zIndex: "100",
        top: "0",
      }}
    >
      <div
        className={`${Styles.top_nav_container} bg-black py-2`}
        style={{ transition: "all 450ms", display: show ? "none" : "block" }}
      >
        <div className="container">
          <div className="row align-items-center gy-2 gy-md-0 ">
            <div className="col-md-4">
              <span className="d-block text-white">
                India’s first wedding market place
              </span>
            </div>
            <div className="col-md-4 col-12">
              <div
                className={`${Styles.input_container} d-flex
                         justify-content-between align-items-center bg-white `}
              >
                <span>All Cities</span>
                <FaChevronDown />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="feedback-wrapper d-flex align-items-center text-white ">
                <span className="icon me-2">
                  <FiEdit />
                </span>
                <span>Write A Review</span>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="dowload-links d-flex justify-content-end justify-content-md-start">
                <Image
                  src={
                    "https://www.vhv.rs/dpng/d/114-1147665_transparent-google-play-icon-png-android-available-on.png"
                  }
                  width={80}
                  height={24}
                  objectFit="contain"
                />
                <Image
                  src={
                    "https://pngset.com/images/app-store-badge-available-on-the-app-store-text-alphabet-number-symbol-transparent-png-480148.png"
                  }
                  width={80}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottm-nav px-4 py-2 primary-bg d-flex align-items-center justify-content-between position-relative ">
        <Link href={"/"} passHref>
          <div className="logo-container">
            <Image
              src={"https://www.wedcell.com/assets/front/images/logo.png"}
              width={220}
              height={57}
              objectFit="contain"
            />
          </div>
        </Link>

        <div className="nav-links-container align-items-center d-none d-md-flex">
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Venues</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            <div className={Styles.dropdown}>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Hotel</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Resort</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Farm House</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Lawn</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Destination Wedding</a>
              </Link>
              <Link href="/venue">
                <a className={Styles.dropdown_link}> Lawn</a>
              </Link>
            </div>
          </div>
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Vendors</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            <div className={`${Styles.dropdown} ${Styles.drop_center}`}>
              <div className="drop-downlinks-container d-flex">
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
          >
            <span className="d-block">Shop Now</span>
            <span className={`d-block ms-2 ${Styles.chevron}`}>
              <FaChevronDown />
            </span>
            <div className={Styles.dropdown}>
              <div className="drop-downlinks-container d-flex">
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/Shop">
                      <a className={Styles.dropdown_link}> Bridal Wears</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
                <div className={Styles.d_links_wrapper}>
                  <span className="shadowed-text d-block text-black">
                    Photgraphers
                  </span>
                  <div className={`d-links mt-2`}>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Resort</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Farm House</a>
                    </Link>
                    <Link href="/venue">
                      <a className={Styles.dropdown_link}> Lawn</a>
                    </Link>
                    <a href="#" className={Styles.dropdown_link}>
                      Destination Wedding
                    </a>
                    <a href="#" className={Styles.dropdown_link}>
                      {" "}
                      Lawn{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles.nav_link} `}>
            <Link href="/blogs">
              <a className="d-block text-white">Blog</a>
            </Link>
          </div>
          {auth ?

            <div className={`${Styles.nav_link} `}>
              {role.role === "Vendor" ?
                <Link href="/dashboard">
                  <a className="d-block text-white">Account</a>
                </Link>
                : <a href={"#"} onClick={() => {
                  localStorage.removeItem("wedcell")
                  localStorage.removeItem("role")
                  router.push("/")
                  location.reload(true)
                }}>
                  <a className="d-block text-white"> logout</a>
                </a>
              }
            </div>

            :
            <div
              className={`${Styles.nav_link} d-flex align-items-center text-white position-relative`}
            >
              <span className="d-block">Login</span>
              <span className={`d-block ms-2 ${Styles.chevron}`}>
                <FaChevronDown />
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

        <div
          className={Styles.search_wrapper}
          onClick={() => setShowSearch(true)}
        >
          <span className="mb-1">
            <FaSearch />
          </span>
        </div>

        <div
          className={`${Styles.hamburger_container} d-grid d-md-none ms-auto`}
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="d-block mx-auto w-max">
            <GiHamburgerMenu />
          </span>
        </div>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      </div>
    </div >
  );
};

export default Header;
