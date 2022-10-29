import React from 'react'
import Styles from "../styles/Venue.module.css";
import Image from "next/image";

const Venues = () => {
    return (
        <div className=" py-5">
            <div className=" container">
                <div className="row">
                    <div className={Styles.title_section}>
                        <h2 className={Styles.title_section_size}>Top 10 in City</h2>
                        <p className={Styles.title_description}>
                            You can browse all Top 10 venues and vendors in city by category
                            with thumbnail image and category name.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/venue1.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <a href="https://www.wedcell.com/top-city">
                                    <h3 className={Styles.venue_category_overlay_heading}>Venue</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/decorater.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <a href="https://www.wedcell.com/top-city">
                                    <h3 className={Styles.venue_category_overlay_heading}>Decor</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/photographer1.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <a href="https://www.wedcell.com/top-city">
                                    <h3 className={Styles.venue_category_overlay_heading}>Photography</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/makeup-art.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <a href="https://www.wedcell.com/top-city">
                                    <h3 className={Styles.venue_category_overlay_heading}>Make Up Artist</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/planner1.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <h3 className={Styles.venue_category_overlay_heading}>Wedding Planner</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6">
                        <div className={Styles.venue_categories_block}>
                            <div className={Styles.venue_image}>
                                <a href="https://www.wedcell.com/top-city">
                                    <Image
                                        src={"https://wedcell.com/assets/front/images/mehndi1.png"}
                                        height={"178"}
                                        width={"172"}
                                    />
                                </a>
                            </div>
                            <div className={Styles.venue_category_overlay}>
                                <a href="https://www.wedcell.com/top-city">
                                    <h3 className={Styles.venue_category_overlay_heading}>Mehndi Artist</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Venues