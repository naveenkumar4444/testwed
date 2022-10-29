
import ReactPlayer from 'react-player'
import Styles from '../styles/Vendors.module.css'

const Videos = ({ links }) => {


    return (
        <div className='row' >
            {links.length ? links.map((link, key) => (
                <div key={key} className="col-md-4">
                    <div className={Styles.player_container}>
                        <ReactPlayer url={link} controls={true} style={{ objectFit: 'cover' }} width={'100%'} height={'100%'} />
                    </div>
                </div>
            ))
                :
                <>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h2>No Videos found</h2>
                    </div>
                </>
            }
        </div>
    )
}

export default Videos