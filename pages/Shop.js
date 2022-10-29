import React from 'react';
import Styles from '../styles/Shop.module.css';
import Link from 'next/link'






function Shop() {

        const property = {
            imageURL: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/05/56431137_3.jpg',
            title : 'item name',
            itemDescription: 'Bridal Wear Clothing Name',
            button: 'Shop'
        }

        


    return(
        <>
            
            <div className="card">
             <div className="card-body">
                <div className="row g-6" >
                    <Link href={"/ItemDetails"}>
                    
                    <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                   
                    </div>
                  
                </div>
            </div>
                </Link>
               
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                    </div>
                    {/*/.card-body */}
                    </div>
                    {/*/.card */}
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                    </div>
                    {/*/.card-body */}
                    </div>
                    {/*/.card */}
                </div>

                
                {/* /column */}
                </div>
                {/* /.row */}
            </div>
            </div>

            <div className="card">
            <div className="card-body">
                <div className="row g-6">
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                    </div>
                    {/*/.card-body */}
                    </div>
                    {/*/.card */}
                </div>
                {/* /column */}
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                    </div>
                    {/*/.card-body */}
                    </div>
                    {/*/.card */}
                </div>
                <div className="col-lg-4">
                    <div className="card">
                    <img className="card-img-top" src={property.imageURL} srcSet={property.imageURL} alt />
                    <div className="card-body">
                        <h5 className="card-title">Image Cap Top</h5>
                        <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus augue.</p>
                    </div>
                    {/*/.card-body */}
                    </div>
                    {/*/.card */}
                </div>

                
                {/* /column */}
                </div>
                {/* /.row */}
            </div>
            </div>

                                




    </>
    )
}

export default Shop;