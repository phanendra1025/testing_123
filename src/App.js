import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import { v4 as uuid4 } from 'uuid';

import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import ProductContext from './context/ProductContext'
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';
import ProductDetails from './components/ProductDetails';

import Clothes from '../src/images/clothes.jpg';
import Electronics from '../src/images/electronics.jpg';
import Groceries from '../src/images/groceries.jpg';
import Shoes from '../src/images/shoes.jpg';

class App extends Component {

  state = {
    productsList: [
      {
          "id": 1,
          "MobileName": "iPhone 13 Pro Max",
          "Cost": "130000",
          "Model": "A2643",
          "InStock": true,
          "Manufacturer": "Apple",
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 2,
          "MobileName": "USA polo T shirt",
          "Cost": "1200",
          "Model": "SM-G991U",
          "InStock": true,
          "Manufacturer": "USA polo",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id":3,
          "MobileName": "RedTape Cargo pant",
          "Cost": "720",
          "Model": "GD1YQ",
          "InStock": true,
          "Manufacturer": "RedTape",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id": 4,
          "MobileName": "Puma Running Shoes",
          "Cost": "1499",
          "Model": "LE2110",
          "InStock": false,
          "Manufacturer": "Puma",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 5,
          "MobileName": "Xiaomi Mi 11 Ultra",
          "Cost": "90000",
          "Model": "M2102K1G",
          "InStock": true,
          "Manufacturer": "Xiaomi",
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 6,
          "MobileName": "Huawei P50 Pro",
          "Cost": "120000",
          "Model": "PREM-AN00",
          "InStock": false,
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 7,
          "MobileName": "Levi's Denim Shirt",
          "Cost": "4990",
          "Model": "XQ-BC72",
          "InStock": true,
          "Manufacturer": "Levi's",
           "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id": 8,
          "Mobile Name": "Nike Air Jordan",
          "Cost": "9999",
          "Model": "LM-V710EMW",
          "InStock": true,
          "Manufacturer": "Nike",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 9,
          "MobileName": "Reebook Causals",
          "Cost": "85000",
          "Model": "XT2153-1",
          "InStock": true,
          "Manufacturer": "Reebook",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 10,
          "MobileName": "GAP hoodie",
          "Cost": "86000",
          "Model": "ZS673KS",
          "InStock": false,
          "Manufacturer": "GAP",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      }
  ],
  }

  addNewProduct = (mobileName,price,description,stackCount,model,manufacturedBy,releaseYear) => {
    const {productsList} = this.state
    const newProduct = {
          "id": productsList.length + 1,
          "MobileName": mobileName,
          "Cost": price,
          "Model": model,
          "InStock": stackCount,
          "Manufacturer": manufacturedBy,
          "ReleaseYear": releaseYear,
          "description": description}
   this.setState(prevState => ({productsList: [...prevState.productsList, newProduct]}))
  }

  render() {
    const productsList = this.state
    return (
      <ProductContext.Provider
      value={{
        productsList,
        addNewProduct: this.addNewProduct
      }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/products" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />}/>
        </Routes>
      </ProductContext.Provider>
    )
  }
}

export default App