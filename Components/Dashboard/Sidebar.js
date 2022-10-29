import React from 'react'
import Styles from '../../styles/Dashboard/Sidebar.module.css'
import { AiOutlineCompass,AiOutlineUnorderedList,AiOutlineVideoCameraAdd ,AiOutlineContacts} from 'react-icons/ai'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {MdOutlineReviews} from 'react-icons/md'
import { useRouter } from 'next/router'
import {GrUpdate} from 'react-icons/gr'

const Sidebar = ({ headerHeight,dashboard }) => {
  const router = useRouter()

  return (
    <div className={Styles.Sidebar_container} style={{ marginTop: `${headerHeight}px` }}>
      <div className="sidebar-links-container">
        <div className={router.pathname==='/dashboard' || router.pathname==='/user-dashboard'? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>router.push('/dashboard')} >
          <span className={`${Styles.sidebar_icon} me-2`}>
            <AiOutlineCompass />
          </span>
          <span >Dashboard</span>
        </div>

        <div className={router.pathname==='/dashboard/videos'|| router.pathname==='/user-dashboard/videos' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/videos'):router.push('/user-dashboard/videos')}>
          <span className={`${Styles.sidebar_icon} me-3`}>
            <AiOutlineVideoCameraAdd />
          </span>
          <span >Videos</span>
        </div>

        <div className={router.pathname==='/dashboard/pricing' || router.pathname==='/user-dashboard/pricing' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/pricing'):router.push('/user-dashboard/pricing')}>
          <span className={`${Styles.sidebar_icon} me-3`}>
            <FaMoneyBillAlt />
          </span>
          <span >Pricing</span>
        </div>

        <div className={router.pathname==='/dashboard/reviews' || router.pathname==='/user-dashboard/reviews' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/reviews'):router.push('/user-dashboard/reviews')}>
          <span className={`${Styles.sidebar_icon} me-3`}>
            <MdOutlineReviews />
          </span>
          <span >Reviews</span>
        </div>

        
          <div className={router.pathname==='/dashboard/quotelist' || router.pathname==='/user-dashboard/quotelist' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/quotelist'):router.push('/user-dashboard/quotelist')}>
          <span className={`${Styles.sidebar_icon} me-3`}>
            <AiOutlineUnorderedList />
          </span>
          <span >Quote List</span>
        </div>

      
        <div className={router.pathname==='/dashboard/contact' || router.pathname==='/user-dashboard/contact' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/contact'):router.push('/user-dashboard/contact')}>
          <span className={`${Styles.sidebar_icon} me-3`}>
            <AiOutlineContacts />
          </span>
          <span >Contact</span>
        </div>

        <div className={router.pathname==='/dashboard/change-password' || router.pathname==='/user-dashboard/change-password' ? `${Styles.sidebar_links_wrapper} ${Styles.active}  d-flex align-items-center cursor-pointer`:`${Styles.sidebar_links_wrapper}   d-flex align-items-center cursor-pointer` }  onClick={()=>dashboard && dashboard==='vendor' ?router.push('/dashboard/change-password'):router.push('/user-dashboard/change-password')}>
        
          <span className={`${Styles.sidebar_icon} me-3`}>
            <GrUpdate />
          </span>
          <span >Change Password</span>
        </div>

        
      </div>
    </div>
  )
}

export default Sidebar