import React, { useState } from "react";
import Styles from "../styles/weddingprofile.module.css";
import Link from "next/link";
import Image from "next/image";
import VStyles from "../styles/Vendors.module.css";

import Gallery from "../Components/Gallery";
import Albums from "../Components/Albums";
import Videos from "../Components/Videos";

function WeddingProfile() {
  const property = {
    imageURL:
      "https://cdn2.thebridalbox.com/wp-content/uploads/2016/05/Contemporary-Indian-Brides-5.jpg",
    title: "Couples name",
    location: "Delhi",
  };

  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <>
      <div className={Styles.container}>
        <div className="col-sm-4 w-75 rounded ">
          <div className={Styles.Card}>

            <img
              className="card-img-top"
              src={property.imageURL}
              srcSet={property.imageURL}
              alt
            />

          </div>
        </div>
      </div>

      <div style={{
        marginTop: "250px"
      }}>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-container pb-5 bg-white box-shadow mb-4">
                <div className="tabs-container d-flex align-items-center">
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "gallery" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "gallery" ? "hsla(0, 70%, 24%, 1)" : "#000",
                    }}
                    onClick={() => setActiveTab("gallery")}
                  >
                    <h5 className="fw-bold">Gallery </h5>
                  </div>
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "albums" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "albums" ? "hsla(0, 70%, 24%, 1)" : "#000",
                    }}
                    onClick={() => setActiveTab("albums")}
                  >
                    <h5 className="fw-bold">Albums </h5>
                  </div>
                  <div
                    className={VStyles.tab}
                    style={{
                      backgroundColor:
                        activeTab === "videos" ? "#fff" : "#f8f8f8",
                      color:
                        activeTab === "videos" ? "hsla(0, 70%, 24%, 1)" : "#000",
                    }}
                    onClick={() => setActiveTab("videos")}
                  >
                    <h5 className="fw-bold">Videos</h5>
                  </div>
                </div>
                <div className="active-comp px-4 mt-4">
                  {activeTab == "gallery" && <Gallery images={[]} />}
                  {activeTab == "albums" && <Albums albums={[]} />}

                  {activeTab == "videos" && <Videos links={[]} />}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={Styles.profilecontainer}>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <Link href={"/ItemDetails"}>
                <div className="col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={property.imageURL}
                      srcSet={property.imageURL}
                      alt
                    />
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">{property.location}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={property.imageURL}
                    srcSet={property.imageURL}
                    alt
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingProfile;
