import React from 'react'
import Styles from "../../styles/Editlist.module.css"
const EditListedItems = () => {

  return (
    <div className='bg-white py-2'>
      <h5 className='text-center'>Edit Listing</h5>
      <div className={Styles.form_container}>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Title</label>
              <br></br>
              <input type="text" placeholder="Enter Your Name" name="name" className={Styles.nameInput}></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Category</label>
              <br></br>
              <select className={Styles.select_tag}>
                <option value="A">Venue</option>
                <option value="B">Vendor</option>
              </select>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            {/* <label className={Styles.label}>Service</label>
  <br></br> */}
            <label className={Styles.label}>Price</label>
            <br></br>
            <input type="number" value="15000" className={Styles.price_tag}></input>
          </div>

        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Price<span>(Start From)</span></label>
              <br></br>
              <input type="number" value="15000" name="name" className={Styles.nameInput}></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Phone</label>
              <br></br>
              <input type="text" placeholder='0000000000' className={Styles.phone_tag}></input>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            {/* <label className={Styles.label}>Service</label>
  <br></br> */}
            <label className={Styles.label}>Email</label>
            <br></br>
            <input type="email" placeholder='username@gmail.com' className={Styles.email_tag}></input>
          </div>

        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Address</label>
              <br></br>
              <input type="text" placeholder="Enter Your Address" name="name" className={Styles.nameInput}></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>City</label>
              <br></br>
              <select className={Styles.select_tag}>
                <option value="A">NOIDA</option>
                <option value="B">KANPUR</option>
              </select>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Select State</label>
              <br></br>
              <select className={Styles.select_tag}>
                <option value="A">Select State</option>
                <option value="B">Up</option>
                <option value="C">DELHI</option>
              </select>
            </div>
          </div>

        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-4">
            <label className={Styles.label}>Background Image</label>
            <br></br>
            <input type="file" id="myfile" name="myfile" />
          </div>
          <div className="col-md-4">
            <label className={Styles.label}>Menu File</label>
            <br></br>
            <input type="file" id="myfile" name="myfile" />
          </div>
          <div className="col-md-4">
            <label className={Styles.label}>Add Galery</label>
            <br></br>
            <input type="file" id="myfile" name="myfile" />
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label className="form-label">About Us</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write something about yourself.....'></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Terms&Conditions</label>
              <br></br>
              <div className="d-flex">
                <input type="text" name="name" className={Styles.nameInput}></input>
              </div>
            </div>
            <div className={`${Styles.btn_wrapper} col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4}`}>
              <button className={`${Styles.btn} d-block me-auto`}>Add</button>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Package</label>
              <br></br>
              <div className="d-flex">
                <input type="text" name="name" className={Styles.nameInput}></input>
              </div>
            </div>
            <div className={`${Styles.btn_wrapper} col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4}`}>
              <button className={`${Styles.btn} d-block me-auto`}>Add</button>
            </div>
          </div>

        </div>
        <div className="row">
          <h4>Venues</h4>
          <label className={Styles.label}>Vendors</label>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
            <div className={Styles.category_section}>


              <select className={Styles.select_tag}>
                <option value="A">Photographers</option>
                <option value="B">Bridal Makeup</option>
                <option value="C">Groom Makeup</option>
                <option value="D">Family Makeup</option>
              </select>
            </div>
          </div>

          <label className={Styles.label} >Amenities
          </label>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
            <div className={Styles.category_section}>


              <select className={Styles.select_tag}>
                <option value="A">Free Wifi</option>
                <option value="B">Travel Assistance</option>

              </select>
            </div>
          </div>

          <label className={Styles.label}>Tag</label>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
            <div className={Styles.category_section}>


              <select className={Styles.select_tag}>
                <option value="A">Hot Sell</option>
                <option value="B">Low Price</option>

                <option value="D">Family Makeup</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-block mt-3">
          <button className={` primary-btn`}>
            Submit New Item
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditListedItems
