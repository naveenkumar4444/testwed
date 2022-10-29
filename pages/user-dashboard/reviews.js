import Header from '../../Components/Dashboard/Header'
import Styles from '../../styles/Dashboard/Dashboard.module.css'
import { useState } from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import MainDashboard from '../../Components/Dashboard/MainDashboard'
import EditListedItems from '../../Components/Dashboard/EditListedItems'
import { AiFillStar } from 'react-icons/ai'

const reviews = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    return (
        <div className={`${Styles.dashboard_container} bg-grey`} >
            <Header setHeaderHeight={setHeaderHeight} />
            <div className="main_dashboard position-relative" style={{ marginTop: `${headerHeight}px` }} >
                <Sidebar headerHeight={headerHeight} dashboard='/user-dashboard/reviews'/>
                <div className={`${Styles.main_content} ms-auto`} style={{ transition: 'all 450ms', width: isSidebarOpen ? '80%' : '100%' }} >

                    <div className="review-cards-container mb-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bg-white py-4 px-5">
                                    <h5 className="title">
                                        Average Ratings
                                    </h5>
                                    <div className="rating">
                                        <span className="fs-2 fw-bold">0</span>
                                        <span className="text-warning fs-1 ms-1">
                                            <AiFillStar />
                                        </span>
                                        <span className="text-gray d-block mt-2">
                                            0 average based on 0 ratings.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="bg-white py-4 px-5">
                                    <div className="header mb-3">
                                        <h5 className="title fw-bold">
                                            Reviews
                                        </h5>
                                    </div>
                                    <div className="row mx-0 gy-4">
                                        <div className="col-3 ">
                                            <div className="rating-title ps-0 ms-0">
                                            <span>Quality Service</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-3 ">
                                            <div className="rating-title ps-0 ms-0">
                                            <span>Facilities</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "45%"}} aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-3 ">
                                            <div className="rating-title ps-0 ms-0">
                                            <span>Staff</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "55%"}} aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-3 ">
                                            <div className="rating-title ps-0 ms-0">
                                            <span>Flexibility</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="col-3 ">
                                            <div className="rating-title ps-0 ms-0">
                                            <span>Value Of Money</span>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="table-container bg-white py-3 px-4">
                        <table className="table ">
                            <thead>
                                <td>Name</td>
                                <td>Rating</td>
                                <td>Email</td>
                                <td>Date</td>
                                <td>Action</td>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default reviews