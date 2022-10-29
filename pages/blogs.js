import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Styles from "../styles/Blog.module.css";
import Link from "next/link";
import InputStyles from "../styles/Vendors.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className={Styles.blog_hero_continer}>
        <h1 className={` ${Styles.hero_title} text-white fw-bold`}>
          Blog List
        </h1>
      </div>
      <div className="blogs-list-container bg-grey py-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="blogs-card-wrapper">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="blog-card box-shadow bg-white">
                      <div className={Styles.blog_card_img_wrapper}>
                        <Image
                          src={
                            "https://www.wedcell.com/assetss/images/blogs/6187e6bfd6726.jpg"
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="blog_card_body py-4 pe-5 ps-4">
                        <h5 className="fw-bold">
                          Find the Best Bridal Makeup Artist in Delhi 2022
                        </h5>
                        <div className="publish_date d-flex align-items-center my-2">
                          <span className="text-gray">By Admin</span>
                          <span className="date ms-4"> 06-11-2021</span>
                        </div>
                        <Link href={"/"}>
                          <a href="/" className="primary-text fw-bold">
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="blog-card box-shadow bg-white">
                      <div className={Styles.blog_card_img_wrapper}>
                        <Image
                          src={
                            "https://www.wedcell.com/assetss/images/blogs/6187e6bfd6726.jpg"
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="blog_card_body py-4 pe-5 ps-4">
                        <h5 className="fw-bold">
                          Find the Best Bridal Makeup Artist in Delhi 2022
                        </h5>
                        <div className="publish_date d-flex align-items-center my-2">
                          <span className="text-gray">By Admin</span>
                          <span className="date ms-4"> 06-11-2021</span>
                        </div>
                        <Link href={"/"}>
                          <a href="/" className="primary-text fw-bold">
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-shadow bg-white p-3">
                <div className="search-input-outer">
                  <h5>Search</h5>
                  <div
                    className={`${Styles.search_container} box-shadow d-flex align-item-center py-3 mb-3`}
                  >
                    <span className="search line-normal px-2">
                      <AiOutlineSearch />
                    </span>
                    <input
                      type="text"
                      className={InputStyles.search_field}
                      placeholder="Search Anything"
                    />
                  </div>
                </div>

                <div className="categories-container mt-4 ">
                  <h5>Categories</h5>
                  <div className="categories_links mt-3">
                    <div className="d-flex align-items-center cursor-pointer mb-3">
                      <span className="text-gray">
                        <BiRightArrowAlt />{" "}
                      </span>
                      <span className="text-black d-block ms-2">
                        Bridal Makeup
                      </span>
                    </div>
                    <div className="d-flex align-items-center cursor-pointer mb-3">
                      <span className="text-gray">
                        <BiRightArrowAlt />{" "}
                      </span>
                      <span className="text-black d-block ms-2">
                        Photographers
                      </span>
                    </div>
                    <div className="d-flex align-items-center cursor-pointer mb-3">
                      <span className="text-gray">
                        <BiRightArrowAlt />{" "}
                      </span>
                      <span className="text-black d-block ms-2">
                        Wedding Planners
                      </span>
                    </div>
                    <div className="d-flex align-items-center cursor-pointer mb-3">
                      <span className="text-gray">
                        <BiRightArrowAlt />{" "}
                      </span>
                      <span className="text-black d-block ms-2">
                        Bridal Fashion
                      </span>
                    </div>
                  </div>
                </div>
                <div className="categories-container mt-4 ">
                  <h5>Recent Posts</h5>
                  <div className="recent-posts-wrapper mt-4">
                    <div className="recenet_posts d-flex mb-4">
                      <div className={Styles.recent_img_wrapper}>
                        <Image
                          src={
                            "https://wedcell.com/assetss/images/blogs/61ae056acc7ee.jpg"
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="recent_post_content ms-3">
                        <h5>Fresh and Delightful Fruit Corners</h5>
                        <span className="d-block text-gray mt-4">
                          06-12-2021
                        </span>
                      </div>
                    </div>
                    <div className="recenet_posts d-flex mb-4">
                      <div className={Styles.recent_img_wrapper}>
                        <Image
                          src={
                            "https://wedcell.com/assetss/images/blogs/61ae056acc7ee.jpg"
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="recent_post_content ms-3">
                        <h5>Fresh and Delightful Fruit Corners</h5>
                        <span className="d-block text-gray mt-4">
                          06-12-2021
                        </span>
                      </div>
                    </div>
                    <div className="recenet_posts d-flex mb-4">
                      <div className={Styles.recent_img_wrapper}>
                        <Image
                          src={
                            "https://wedcell.com/assetss/images/blogs/61ae056acc7ee.jpg"
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="recent_post_content ms-3">
                        <h5>Fresh and Delightful Fruit Corners</h5>
                        <span className="d-block text-gray mt-4">
                          06-12-2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
