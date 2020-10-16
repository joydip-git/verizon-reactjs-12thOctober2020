import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
import { getProducts } from '../../service/productService'
import './ProductContainer.css'

class ProductContainer extends Component {
    state = {
        products: [],
        errorMessage: '',
        loading: true
    }
    componentDidMount() {
        getProducts()
            .then((resp) => {
                this.setState({
                    products: resp.data,
                    loading: false,
                    errorMessage: ''
                })
            })
            .catch(e => this.setState({
                errorMessage: e.message,
                products: [],
                loading: false
            }))
    }
    render() {
        let { products, loading, errorMessage } = this.state;
        let design = null;
        if (loading) {
            design = <span>loading...</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (products === null || products.length === 0) {
            design = <span>No product available</span>
        } else {
            design = (
                <div className='panel panel-primary primaryDivStyle'>
                    <ProductList products={products} />
                </div>
            )
        }
        return design;
    }
}

export default ProductContainer
