import React from "react";
import Styles from "../styles/Footer.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={Styles.social_media_block}>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Delhi NCR</h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Delhi</li>
                <li>Decoration In Delhi</li>
                <li>Photographers In Delhi</li>
                <li>Makeup Artist In Delhi</li>
                <li>Mehndi Artist In Delhi</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Jaipur </h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Jaipur</li>
                <li>Decoration In Jaipur</li>
                <li>Photographers In Jaipur</li>
                <li>Makeup Artist In Jaipur</li>
                <li>Mehndi Artist In Jaipur</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Udaipur </h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Udaipur</li>
                <li>Decoration In Udaipur</li>
                <li>Photographers In Udaipur</li>
                <li>Makeup Artist In Udaipur</li>
                <li>Mehndi Artist In Udaipur</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Agra </h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Agra</li>
                <li>Decoration In Agra</li>
                <li>Photographers In Agra</li>
                <li>Makeup Artist In Agra</li>
                <li>Mehndi Artist In Agra</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Jim Corbett </h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Jim Corbett</li>
                <li>Decoration In Jim Corbett</li>
                <li>Photographers In Jim Corbett</li>
              </ul>
            </div>
          </div>{" "}
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Jodhpur </h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>5 Stars Hotels In Jodhpur</li>
                <li>Decoration In Jodhpur</li>
                <li>Photographers In Jodhpur</li>
                <li>Makeup Artist In Jodhpur</li>
                <li>Mehndi Artist In Jodhpur</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Destination Wedding</h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>Agra</li>
                <li> Delhi</li>
                <li>Jaipur</li>
                <li>Udaipur</li>
                <li>Jodhpur</li>
                <li>Jim Corbett</li>
                <li>Masoori</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Venue</h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>Agra</li>
                <li> Delhi</li>
                <li>Jaipur</li>
                <li>Udaipur</li>
                <li>Jodhpur</li>
                <li>Jim Corbett</li>
                <li>Masoori</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Vendor</h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>Agra</li>
                <li> Delhi</li>
                <li>Jaipur</li>
                <li>Udaipur</li>
                <li>Jodhpur</li>
                <li>Jim Corbett</li>
                <li>Masoori</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>Important Links</h3>
              <ul className={`${Styles.listnone} px-0`}>
                <li>Home</li>
                <li> Contact Us</li>
                <li>Terms &amp; Conditions</li>
                <Link href={"/privacy-policy"}>
                  <li>Privacy Policy</li>
                </Link>
                <li>About</li>
                <li>Blog</li>
                <li>Institute</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="footer-widget">
              <h3 className={Styles.widget_title}>List You Buisness</h3>
              <ul className={Styles.listnone}>
                <li>Are you vendor ? List your venue and</li>
                <li>service get more from listing business.</li>
                <li>
                  <button className={Styles.footer_button}>
                    List Your Buisness
                  </button>
                </li>
                <li>
                  {" "}
                  <Image
                    src={
                      "https://wedcell.com/assets/images/get_it_google_footer.png"
                    }
                    height={"50"}
                    width={"160"}
                  />
                </li>
                <li>
                  {" "}
                  <Image
                    src={
                      "	https://wedcell.com/assets/images/get_it_apple_store_hi.png"
                    }
                    height={"50"}
                    width={"160"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={Styles.copyright}></div>

          <p className={`${Styles.footer_copyright} mb-0`}>
            <Link href={"/terms-conditions"}>
              <a>Terms and Conditions</a>
            </Link>
            |
            <Link href={"/privacy-policy"}>
              <a>Privacy Policy</a>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;© 2018 Wedcell. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
