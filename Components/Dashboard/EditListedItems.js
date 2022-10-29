import React, { useEffect, useState } from 'react'
import Styles from "../../styles/Editlist.module.css"
import axios from 'axios'

import { useRouter } from 'next/router'

import { PROXY } from '../../config'

const cities = [
  'Mumbai',
  'Pune',
  'Delhi',
  'Jaipur',
  'Goa',
  'Udaipur',
  'Agra',
  'Noida',
  'Gurgaon',
  'Ranchi',
  'Patna',
  'Bangalore',
  'Hyderabad',
  'Ahmedabad',
  'Chennai',
  'Kolkata',
  'Surat',
  'Lucknow',
  'Kanpur',
  'Nagpur',
  'Indore',
  'Thane',
  'Bhopal',
  'Visakhapatnam',
  'Vadodara',
  'Ghaziabad',
  'Ludhiana',
  'Nashik',
  'Meerut',
  'Rajkot',
  'Varanasi',
  'Srinagar',
  'Aurangabad',
  'Dhanbad',
  'Amritsar',
  'Allahabad',
  'Gwalior',
  'Jabalpur',
  'Coimbatore',
  'Vijayawada',
  'Jodhpur',
  'Raipur',
  'Kota',
  'Chandigarh',
  'Guwahati',
  'Mysore',
  'Bareilly',
  'Aligarh',
  'Moradabad',
  'Jalandhar',
  'Bhuba',
  'Gorakhpur',
  'Bikaner',
  'Saharanpur',
  'Jamshedpur',
  'Bhilai',
  'Cuttack',
  'Firozabad',
  'Kochi',
  'Dehradun',
  'Durgapur',
  'Ajmer',
  'Siliguri',
  'Gaya',
  'Tirupati',
  'Mathura',
  'Bilaspur',
  'Haridwar',
  'Gandhinagar',
  'Shimla',
  'Gangtok',
  'Nainital',
  'Jaisalmer',
  'Indor',
  'Rishikesh',
  'kaushali',
  'Pushkar',
  'Kerala',
  'Jim Corbet',
  'Mussoorie',
  'Dubai',
  'Thailand',
  'Canada',
  'Srilanka',
  'South Africa',
  'Singapore',
  'Bali',
  'Italy',
  'UK',
  'Autralia',
  'Bokaro',
  'Faridabad',
  'South Delhi',
  'Kolkata',
]

const CategotiesList = [
  {
    name: 'Bridal Wear',
    subCategories: [],
  },
  {
    name: 'Groom Wear',
    subCategories: [],
  },
  {
    name: 'Food',
    subCategories: [
      'Chaat Counter',
      'Fruit Counter',
      'Catering services',
      'Pan Counter',
      'Cake',
      'Bar Tenders',
    ],
  },
  {
    name: 'Invites & Gifts',
    subCategories: ['invitation card', 'invitation gift'],
  },
  {
    name: 'Jwellery And Accessories',
    subCategories: [
      'FLOWER JEWELLERY ',
      'BRIDAL JEWELLERYON RENT',
      'Artificial',
      'Accessories',
    ],
  },
  {
    name: 'Music & Dance',
    subCategories: [
      'Anchor',
      'Artist management services',
      'Choreographer',
      'Singer',
      'DJ',
      'Ghodi & Baggi',
      'Band Baja',
      'Dhol',
    ],
  },
  {
    name: 'Pandit Jee',
    subCategories: [],
  },
  {
    name: 'Makeup',
    subCategories: ['bridal makeup', 'Groom Makeup', 'Family Makeup'],
  },
  {
    name: 'Mehndi',
    subCategories: ['Bride Mehndi', 'Family Member Mehndi'],
  },
  {
    name: 'Photographers',
    subCategories: [
      'Cinema/Video',
      'Album',
      'Collage Maker',
      'Drone',
      'Pre Wedding Shoot',
    ],
  },
  {
    name: 'Planning & Decor',
    subCategories: [
      'Wedding Decor',
      'Wedding Planners',
      'Celebrities Management',
      'Hospitality Service',
    ],
  },
]

const CategotiesListVenue = [
  {
    name: 'Hotel',
    subCategories: [],
  },
  {
    name: 'Resort',
    subCategories: [],
  },
  {
    name: 'Farm House',
    subCategories: [],
  },
  {
    name: 'Banquet Hall',
    subCategories: [],
  },
  {
    name: 'Lawn',
    subCategories: [],
  },
  {
    name: 'Destination Wedding',
    subCategories: [],
  },
]

const EditListedItems = () => {

  const router = useRouter()

  const [config, setConfig] = useState()
  const [status, setStatus] = useState('Submit New Item')

  const [mainImage, setMainImage] = useState(null)
  const [galleryImages, setGalleryImages] = useState()
  const [brochure, setBrochure] = useState(null)
  const [albums, setAlbums] = useState([{ name: '', value: '' }])

  const [vidLinks, setVidLinks] = useState([''])

  const [amenities, setAmenities] = useState([{ name: '', min: '', max: '' }])
  const [plans, setPlans] = useState([{ name: '', value: '' }])
  const [features, setFeatures] = useState([{ name: '', value: false }])
  const [allowedVendors, setAllowedVendors] = useState([
    { name: 'Decor', value: false },
    { name: 'DJ', value: false },
    { name: 'Cake', value: false },
    { name: 'Liquor', value: false },
    { name: 'Pan Counter', value: false },
  ])

  const [form, setForm] = useState({
    name: '',
    category: '',
    type: '',
    address: '',
    albums: [],
    Brochure: [],
  })

  const mainImageHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setMainImage(i)
    }
  };

  const galleryHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files;
      setGalleryImages(i)
    }
  };

  const albumHandler = index => e => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files;
      let newArr = [...albums];
      newArr[index].value = i;
      setAlbums(newArr);
    }
  };

  const onChangeAlbumHandler = index => e => {
    let newArr = [...albums];
    newArr[index].name = e.target.value;
    setAlbums(newArr);
  }

  const brochureHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setBrochure(i)
    }
  };

  const testImage = () => {

    console.log("mainImage", mainImage);

    const mainform = new FormData()
    mainform.append('image', mainImage)
    mainform.append('_id', "6352df5eb7c44800163db99d")
    console.log("mainform", mainform);
    axios
      .post(`${PROXY}/item/mainimage`, mainform, config)
      .then(res => {
        console.log("mainimage response", res.data)
      })
      .catch(err => console.log('E' + err))
  }

  const addHandler = async () => {

    if (!form.name.length || !form.type.length || !form.category.length || !form.address.length)
      return alert('Please fill name ,type , city, address')
    if (mainImage === null) return alert('Please select main image')

    setStatus("Wait....Uploading info")
    const data = await axios.post(
      `${PROXY}/item/create`,
      form,
      config,
    )

    const itemdata = data.data.data
    setStatus("Don....Uploading info")
    // uploadMainImage(itemdata)    
    setStatus("Wait....Uploading mainimage")
    const mainform = new FormData()
    mainform.append('image', mainImage)
    mainform.append('_id', itemdata._id)
    console.log("mainform", mainform);
    try {

      // ----- mainimage

      axios
        .post(`${PROXY}/item/mainimage`, mainform, config)
        .then(res => {
          console.log("mainimage response", res.data)
          setStatus("Done....Uploading mainimage")
        })
        .catch(err => console.log('E' + err))

      //------- gallary
      console.log(galleryImages.length);
      if (galleryImages.length) {
        setStatus("Wait....Uploading gallery")
        const gallery = new FormData()
        Object.keys(galleryImages).forEach(function (key) {
          console.log(galleryImages[key]);
          gallery.append(`images`, galleryImages[key])
        });

        gallery.append('_id', itemdata._id)
        await axios.post(
          `${PROXY}/item/imageupload`,
          gallery,
          config,
        )
        setStatus("done....Uploading gallery")
      }
    } catch (error) {
      console.log(error);
    }

    //------ brochure
    const brocherdata = new FormData()
    if (brochure) {
      setStatus("Wait....Uploading brochure")
      brocherdata.append(`brochure`, brochure)
      brocherdata.append('_id', itemdata._id)
      await axios.post(
        `${PROXY}/item/uploadbrochure`,
        brocherdata,
        config,
      )
      setStatus("done....Uploading brochure")
    }

    //------albums

    setStatus('Wait....Uploading albums')
    for (let item of albums) {
      if (item.name && item.value) await uploadAlbums(itemdata._id, item, config)
    }
    setStatus('done....Uploading albums')
    setStatus("All done")
    router.push("/dashboard")
  }

  const uploadAlbums = async (id, item, config) => {
    const data = new FormData()
    data.append('_id', id)
    data.append('name', item.name)
    console.log(item.name);
    Object.keys(item.value).forEach(function (key) {
      console.log(item.value[key]);
      // data.append('name', item.name)
      data.append(`albums`, item.value[key])
    });
    await axios.post(
      `${PROXY}/item/uploadalbum`,
      data,
      config,
    )
    return
  }

  const test = async () => {
    for (let item of albums) {
      if (item.name && item.value) await testupload(item)
    }
  }

  const testupload = async (item) => {
    const data = new FormData()
    data.append('name', item.name)
    Object.keys(item.value).forEach(function (key) {
      data.append(`albums`, item.value[key])
    });
    console.log(data);
  }

  useEffect(() => {

    if (localStorage.getItem("wedcell") !== null) {
      const config = {
        headers: { authorization: JSON.parse(localStorage.getItem("wedcell")).data.token },
      }

      setConfig(config)

      setForm({ ...form, vendorId: JSON.parse(localStorage.getItem("wedcell")).data._id })
    }

  }, [])

  // console.log(form);
  // console.log(plans);
  // console.log(amenities);
  // console.log(features);
  // console.log(allowedVendors);
  // console.log(vidLinks);

  return (
    <div className='bg-white py-2'>

      <h5 className='text-center'>Add Listing</h5>

      {/* <button onClick={testImage}>Click</button> */}
      {/* <button onClick={test}>Click</button> */}

      <div className={Styles.form_container}>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Main Image</label>
              <br></br>
              <label className={Styles.label}>
                <input type="file" accept="image/*" onChange={mainImageHandler} />
              </label>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Listing Type</label>
              <br></br>
              <select onChange={(e) => {
                setForm({ ...form, type: e.target.value })
                setAmenities([{ name: '', min: '', max: '' }])
                setPlans([{ name: '', value: '' }])
                setFeatures([{ name: '', value: false }])
                setAllowedVendors([
                  { name: 'Decor', value: false },
                  { name: 'DJ', value: false },
                  { name: 'Cake', value: false },
                  { name: 'Liquor', value: false },
                  { name: 'Pan Counter', value: false },
                ])
              }} className={Styles.select_tag}>
                <option value="" disabled selected>--select--</option>
                <option value="Venue">Venue</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>City</label>
              <br></br>
              <select onChange={(e) => {
                setForm({ ...form, city: e.target.value })
              }} id='city' className={Styles.select_tag}>
                <option value={null} disabled selected>--select--</option>
                {cities.map((name) => (
                  <option value={name}>{name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <label className={Styles.label}>Price</label>
            <br></br>
            <input type="number" value="15000" className={Styles.price_tag}></input>
          </div> */}

        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Category</label>
              <br></br>
              {form.type === "Vendor" ?
                <select onChange={(e) => {
                  setForm({ ...form, category: e.target.value })
                }} id='city' className={Styles.select_tag}>
                  <option value={null} disabled selected>--select--</option>
                  {CategotiesList.map((list, key) => (
                    <option key={key} value={list.name}>{list.name}</option>
                  ))}
                </select>
                :
                <select onChange={(e) => {
                  setForm({ ...form, category: e.target.value })
                }} id='city' className={Styles.select_tag}>
                  <option value={null} disabled selected>--select--</option>
                  {CategotiesListVenue.map((list, key) => (
                    <option key={key} value={list.name}>{list.name}</option>
                  ))}
                </select>
              }
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Sub Category</label>
              <br></br>
              {form.type === "Vendor" ?
                <select onChange={(e) => {
                  setForm({ ...form, subCategory: e.target.value })
                }} className={Styles.select_tag}>
                  <option value={null} disabled selected>--select--</option>
                  {CategotiesList.map((list) => (
                    form.category === list.name ?
                      list.subCategories.map((sub) => (
                        <option value={sub}>{sub}</option>
                      ))
                      : ""
                  ))}
                </select>
                :
                <select onChange={(e) => {
                  setForm({ ...form, subCategory: e.target.value })
                }} className={Styles.select_tag}>
                  <option value={null} disabled selected>--select--</option>
                  {CategotiesListVenue.map((list) => (
                    form.category === list.name ?
                      list.subCategories.map((sub) => (
                        <option value={sub}>{sub}</option>
                      ))
                      : ""
                  ))}
                </select>
              }
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Name of Listing</label>
              <br></br>
              <input onChange={(e) => {
                setForm({ ...form, name: e.target.value })
              }} type="text" placeholder='Name of Listing' className={Styles.phone_tag}></input>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <label className={Styles.label}>Description / About</label>
            <br></br>
            <input onChange={(e) => {
              setForm({ ...form, description: e.target.value })
            }} type="text" placeholder='Description / About' className={Styles.email_tag}></input>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Contact Email</label>
              <br></br>
              <input onChange={(e) => {
                setForm({ ...form, contactEmail: e.target.value })
              }} type="text" placeholder='Contact Email' className={Styles.phone_tag}></input>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <label className={Styles.label}>Contact Number</label>
            <br></br>
            <input onChange={(e) => {
              setForm({ ...form, contactPhone: e.target.value })
            }} type="text" placeholder='Contact Number' className={Styles.email_tag}></input>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Address</label>
              <br></br>
              <input onChange={(e) => {
                setForm({ ...form, address: e.target.value })
              }} type="text" placeholder='Address' className={Styles.phone_tag}></input>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <label className={Styles.label}>Zipcode</label>
            <br></br>
            <input onChange={(e) => {
              setForm({ ...form, zipcode: e.target.value })
            }} type="text" placeholder='Zipcode' className={Styles.email_tag}></input>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Amenity Price</label>
              <br></br>
              <input onChange={(e) => {
                setForm({ ...form, price: e.target.value })
              }} type="text" placeholder='Amenity Price' className={Styles.phone_tag}></input>
            </div>
          </div>

        </div>

        {form.type === "Venue" && (
          <>
            <div className="row">

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className={Styles.category_section}>
                  <label className={Styles.label}>Veg Platter Price (in ₹)</label>
                  <br></br>
                  <input onChange={(e) => {
                    setForm({ ...form, vegPerPlate: e.target.value })
                  }} type="text" placeholder='Veg Platter Price (in ₹)' className={Styles.phone_tag}></input>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <label className={Styles.label}>NonVeg Platter Price (in ₹)</label>
                <br></br>
                <input onChange={(e) => {
                  setForm({ ...form, nonVegPerPlate: e.target.value })
                }} type="text" placeholder='NonVeg Platter Price (in ₹)' className={Styles.email_tag}></input>
              </div>

            </div>

            <div className="row mt-3 mb-3">
              <label className={Styles.label}>Amenities / Halls
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                  const newitem = { name: '', min: '', max: '' }
                  setAmenities(old => [...old, newitem]);
                }} className='fs-5 cursor-pointer'>
                  +
                </span></label>

              {amenities.map((data, key) => (
                <>
                  <div className="col-md-4">
                    <label className={Styles.label}>Name</label>
                    <br></br>
                    <input onChange={(e) => {
                      const newarr = [...amenities]
                      newarr[key].name = e.target.value
                      setAmenities(newarr)
                      setForm({ ...form, amenities: newarr })
                    }} type="text" placeholder='Name' className={Styles.phone_tag}></input>
                  </div>
                  <div className="col-md-4">
                    <label className={Styles.label}>Minimum Capacity</label>
                    <br></br>
                    <input onChange={(e) => {
                      const newarr = [...amenities]
                      newarr[key].min = e.target.value
                      setAmenities(newarr)
                      setForm({ ...form, amenities: newarr })
                    }} type="text" placeholder='Minimum Capacity' className={Styles.phone_tag}></input>
                  </div>
                  <div className="col-md-4">
                    <label className={Styles.label}>Maximum Capacity</label>
                    <br></br>
                    <input onChange={(e) => {
                      const newarr = [...amenities]
                      newarr[key].max = e.target.value
                      setAmenities(newarr)
                      setForm({ ...form, amenities: newarr })
                    }} type="text" placeholder='Maximum Capacity' className={Styles.phone_tag}></input>
                  </div>
                </>
              ))}

            </div>

            <label className={Styles.label}>Vendor Allow Policy</label>
            <div className="row mt-3 mb-3">
              <div className="col-md-4">
                <label className={Styles.label}>Vendor Name</label>
                <br></br>
              </div>
              <div className="col-md-4">
                <label className={Styles.label}>Allowed / Not Allowed</label>
                <br></br>
              </div>
            </div>
            {allowedVendors.map((data, key) => (
              <div className="row mt-3 mb-3" key={key}>
                <div className="col-md-4">
                  {/* <label className={Styles.label}>Vendor Name</label>
                  <br></br> */}
                  <label className={Styles.label}>{data.name}</label>
                </div>
                <div className="col-md-4">
                  {/* <label className={Styles.label}>Allowed / Not Allowed</label>
                  <br></br><br /> */}
                  <input type="checkbox" onClick={() => {
                    const newarr = [...allowedVendors]
                    newarr[key].value = !data.value
                    setAllowedVendors(newarr)
                    setForm({ ...form, allowedVendors: newarr })
                  }} checked={data.value} ></input>
                </div>
              </div>
            ))}

            <label className={Styles.label}>Features
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span onClick={() => {
                const newitem = { name: '', value: '' }
                setFeatures(old => [...old, newitem]);
              }} className='fs-5 cursor-pointer'>
                +
              </span>
            </label>
            {features.map((data, key) => (
              <div className="row mt-3 mb-3" key={key}>
                <div className="col-md-4">
                  <label className={Styles.label}>Name</label>
                  <br></br>
                  <input onChange={(e) => {
                    const newarr = [...features]
                    newarr[key].name = e.target.value
                    setFeatures(newarr)
                    setForm({ ...form, features: newarr })
                  }} type="text" placeholder='Name' className={Styles.phone_tag}></input>
                </div>
                <div className="col-md-4">
                  <label className={Styles.label}>Allowed / Not Allowed</label>
                  <br></br><br />
                  <input type="checkbox" onClick={() => {
                    const newarr = [...features]
                    newarr[key].value = !data.value
                    setFeatures(newarr)
                    setForm({ ...form, features: newarr })
                  }} checked={data.value} ></input>
                </div>
              </div>
            ))}
          </>
        )}

        <div className="row mt-3 mb-3">
          <label className={Styles.label}>Plans / Packages
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={() => {
              const newitem = { name: '', value: '' }
              setPlans(old => [...old, newitem]);
            }} className='fs-5 cursor-pointer'>
              +
            </span></label>

          {plans.map((data, key) => (
            <div className="row mt-3 mb-3">
              <div className="col-md-4">
                <label className={Styles.label}>Plan Name</label>
                <br></br>
                <input onChange={(e) => {
                  const newarr = [...plans]
                  newarr[key].name = e.target.value
                  setPlans(newarr)
                  setForm({ ...form, plans: newarr })
                }} type="text" placeholder='Plan Name' className={Styles.phone_tag}></input>
              </div>
              <div className="col-md-4">
                <label className={Styles.label}>Value</label>
                <br></br>
                <input onChange={(e) => {
                  const newarr = [...plans]
                  newarr[key].value = e.target.value
                  setPlans(newarr)
                  setForm({ ...form, plans: newarr })
                }} type="text" placeholder='Value' className={Styles.phone_tag}></input>
              </div>
            </div>
          ))}

        </div>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Terms and Conditions</label>
              <br></br>
              <textarea onChange={(e) => {
                setForm({ ...form, termsandconditions: e.target.value })
              }} type="text" placeholder='Terms and Conditions' className={Styles.phone_tag}></textarea>
            </div>
          </div>

        </div>

        {/* <div className="row mt-3 mb-3">
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
        </div> */}

        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Gallary</label>
              <br></br>
              <label className={Styles.label}>
                <input onChange={galleryHandler} type="file" id="myfile" name="myfile" multiple />
              </label>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Brochure</label>
              <br></br>
              <label className={Styles.label}>
                <input onChange={brochureHandler} type="file" />
              </label>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.name_block}>
              <label className={Styles.label}>Albums</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span onClick={() => {
                const newitem = { name: '', value: '' }
                setAlbums(old => [...old, newitem]);
              }} className='fs-5 cursor-pointer'>
                +
              </span>
              <br></br>

              {albums.map((album, key) => (
                <label key={key} className={Styles.label}>
                  <input type="text" onChange={onChangeAlbumHandler(key)} placeholder='Album name' className={Styles.phone_tag}></input>
                  <input onChange={albumHandler(key)} type="file" id="myfile" name="myfile" multiple />
                </label>
              ))}

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Styles.category_section}>
              <label className={Styles.label}>Video Links
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                  const newitem = ''
                  setVidLinks(old => [...old, newitem]);
                }} className='fs-5 cursor-pointer'>
                  +
                </span>
              </label>
              <br></br>
              {vidLinks.map((data, key) => (
                <input onChange={(e) => {
                  const newitem = [...vidLinks]
                  newitem[key] = e.target.value
                  setVidLinks(newitem);
                  setForm({ ...form, vidLinks: newitem })
                }} type="text" placeholder='https://youtu.be/dOKQeqGNJwY' className={Styles.phone_tag}></input>
              ))}
            </div>
          </div>

        </div>

        {/* <div className="row">

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

          <label className={Styles.label} >Amenities</label>

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

        </div> */}

        <div className="d-block mt-3">
          <button onClick={addHandler} className={` primary-btn`}>
            {status}
          </button>
        </div>

      </div>

    </div>
  )
}

export default EditListedItems
