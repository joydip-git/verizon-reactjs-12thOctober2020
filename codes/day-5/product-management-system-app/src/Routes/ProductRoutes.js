import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Common/Home/Home';
import ProductContainer from '../containers/Product/ProductContainer'
import AddProduct from '../components/Product/AddProduct/AddProduct'
import ProductDetail from '../components/Product/ProductDetail/ProductDetail'
import UpdateProduct from '../components/Product/UpdateProduct/UpdateProduct'

export default function ProductRoutes() {
    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/products' exact component={ProductContainer} />
            <Route path='/add' component={AddProduct} />
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/update/:id' component={UpdateProduct} />
        </>
    )
}
