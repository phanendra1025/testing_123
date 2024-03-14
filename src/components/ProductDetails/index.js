import React, { useContext } from 'react';
import SideNavbar from '../SideNavbar';
import ProductContext from '../../context/ProductContext';
import './index.css';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const { productsList } = useContext(ProductContext);
    console.log(productsList)
    const { id } = useParams();
    console.log(id)

    const productDetailsList = productsList.productsList.filter(product => (product.id == id));
    const productDetails = productDetailsList[0]

    return (
        <div className='common-container'>
            <SideNavbar />
            <div className='product-details-container'>
                <div className='center-container'>
<div className='img-container'>
                    <h1 className='products-details-heading'>About Product</h1>
                    <img className='product-details-img' src={Img} alt='details' />
                </div>

                <div className='product-details-content'>
                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Name </label>
                            <p>|</p>
                        </div>
                        <p className='product-details-text'>{productDetails.MobileName}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Cost </label>
                            <p>|</p>
                        </div>
                        <p>{productDetails.Cost}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Model </label>
                            <p>|</p>
                        </div>
                        <p>{productDetails.Model}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Manufactured By </label>
                            <p>|</p>
                        </div>
                        <p>{productDetails.Manufacturer}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>InStock </label>
                            <p>|</p>
                        </div>
                        <p>{productDetails.InStock}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>ReleaseYear </label>
                            <p>|</p>
                        </div>
                        <p>{productDetails.ReleaseYear}</p>
                    </div>
                </div>

                <Link to="/products"><button className='back-to-products'>
                        Back
                    </button></Link>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDetails;
