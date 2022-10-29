import Header from '../../Components/Dashboard/Header'
import Styles from '../../styles/Dashboard/Dashboard.module.css'
import { useState } from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'


const ChangePassword = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    return (
        <div className={`${Styles.dashboard_container} bg-grey`} >
            <Header setHeaderHeight={setHeaderHeight} />
            <div className="main_dashboard position-relative" style={{ marginTop: `${headerHeight}px` }} >
                <Sidebar headerHeight={headerHeight} dashboard='vendor' />
                <div className={`${Styles.main_content} ms-auto`} style={{ transition: 'all 450ms', width: isSidebarOpen ? '80%' : '100%' }} >

                    <div className="form-container">
                        <h4 className='mb-4' >Change Password</h4>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-3">
                                    
                                    <input type="text" placeholder='Enter Old Password' className="form-control py-2" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                   
                                    <input type="text" placeholder='Enter New Password' className="form-control py-2" />
                                </div>
                            </div>
                        </div>
                        <button className="primary-sm-btn">
                            Submit
                        </button>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ChangePassword