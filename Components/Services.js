import React from 'react'
import Image from 'next/image'
import Styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div className=" py-5">

        <div className={`${Styles.services_container} flex-wrap`}>
          <a href="#">

            <div className="services-block text-center">
              <Image
                src={'https://www.wedcell.com/assets/front/images/venue-wedcell.png'}
                width={70}
                height={70}
                objectFit='contain'
              />
              <span className="shadowed-text d-block ">Venues</span>
            </div>
          </a>

          <a href="#">

            <div className="services-block text-center">
              <Image
                src={'https://www.wedcell.com/assets/front/images/choreographer-wedcell.png'}
                width={70}
                height={70}
                objectFit='contain'
              />
              <span className="shadowed-text d-block ">Choreographers</span>
            </div>
          </a>
          <a href="#">


            <div className="services-block text-center">
              <Image
                src={'https://www.wedcell.com/assets/front/images/wedding-planner-wedcell.png'}
                width={70}
                height={70}
                objectFit='contain'
              />
              <span className="shadowed-text d-block ">Planners</span>
            </div>
          </a>

          <a href="#">


            <div className="services-block text-center">
              <Image
                src={'https://www.wedcell.com/assets/front/images/mehndi-wedcell.png'}
                width={70}
                height={70}
                objectFit='contain'
              />
              <span className="shadowed-text d-block ">Mehndi Artists</span>
            </div>
          </a>

          <a href="#">


            <div className="services-block text-center">
              <Image
                src={'https://www.wedcell.com/assets/front/images/invitation-card.png'}
                width={70}
                height={70}
                objectFit='contain'
              />
              <span className="shadowed-text d-block ">Invitation Card</span>
            </div>
          </a>

          <div className="services-block text-center">
            <Image
              src={'https://www.wedcell.com/assets/front/images/photographer-wedcell.png'}
              width={70}
              height={70}
              objectFit='contain'
            />
            <span className="shadowed-text d-block ">Photographers</span>
          </div>
          <div className="services-block text-center">
            <Image
              src={'https://www.wedcell.com/assets/front/images/fashion-designer.png'}
              width={70}
              height={70}
              objectFit='contain'
            />
            <span className="shadowed-text d-block ">Bridal Wear</span>
          </div>
          <div className="services-block text-center">
            <Image
              src={'https://www.wedcell.com/assets/front/images/makeup-artist.png'}
              width={70}
              height={70}
              objectFit='contain'
            />
            <span className="shadowed-text d-block ">MakeUp Artists</span>
          </div>
          <div className="services-block text-center">
            <Image
              src={'https://www.wedcell.com/assets/front/images/wedding-Decorators.png'}
              width={70}
              height={70}
              objectFit='contain'
            />
            <span className="shadowed-text d-block ">Decorators</span>
          </div>
        </div>
      </div>
  )
}

export default Services