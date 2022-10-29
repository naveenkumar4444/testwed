import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../Components/CustomButton";
import Styles from "../styles/PopularMakeup.module.css";
import Image from "next/image";
import { PROXY } from "../config";
import Link from "next/link";

const PopularMehndi = ({ mehndi }) => {
  const [mehndis, setMehndis] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    setMehndis(mehndi);
  }, [mehndi]);

  return (
    <div className={`py-60 bg-grey`}>
      <div className=" px-4">
        <div className="title-container text-center">
          <h2>Popular Mehndi</h2>
          <p className="text-gray">
            A short description for showcase of Popular Mehandi.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          ssr={true}
          swipeable={true}
          draggable={true}
          arrows={false}
          customButtonGroup={<CustomButton />}
          itemClass={Styles.carousel_item}
          containerClass={"py-5"}
        >
          {mehndis.map((meh, key) => (
            <Link key={key} href={meh.type === 'Vendor' ? `${meh.type.toLowerCase()}s/${meh._id}` : `/venue/${meh._id}`}>
              <div className={Styles.cr_container}>
                <div
                  className={`${Styles.cr_img_wrapper} w-100 position-relative`}
                >
                  <Image
                    src={meh.mainImage ? `${PROXY}/${meh.mainImage}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="cr-body">
                  <div className="cr-info pt-4 px-5 text-center text-gray">
                    {meh.address}
                  </div>
                  <div className={`cr-footer d-flex mt-4 ${Styles.br_top}`}>
                    <div className={Styles.cr_info}>
                      <span className="d-block">₹ {meh.price}</span>
                      <span className="d-block f-bold mt-2 shadowed-text">
                        Starting Price
                      </span>
                    </div>

                    <div className={`${Styles.cr_info} `}>
                      <div className="stars-container d-flex align-items-center mx-auto w-max">
                        <span className="d-block text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                        <span className="d-block ms-2 text-warning">
                          <FaStar />
                        </span>
                      </div>
                      <span className="d-block small mt-2">(20)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularMehndi;
