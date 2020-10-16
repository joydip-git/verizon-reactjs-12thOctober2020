import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
//import { getProducts } from '../../service/productService'
import './ProductContainer.css'
import { connect } from 'react-redux'
import { getProductsAsyncAction } from '../../redux/actions/getProductsActions'

class ProductContainer extends Component {
    // state = {
    //     products: [],
    //     errorMessage: '',
    //     loading: true
    // }
    componentDidMount() {
        this.props.getAllProducts();
        // if(localStorage.key('products')){
        //     this.setState({
        //         products: JSON.parse(localStorage.getItem('products')),
        //         loading: false,
        //         errorMessage: ''
        //     })
        // }
        // getProducts()
        //     .then((resp) => {
        //         this.setState({
        //             products: resp.data,
        //             loading: false,
        //             errorMessage: ''
        //         })
        //     })
        //     .catch(e => this.setState({
        //         errorMessage: e.message,
        //         products: [],
        //         loading: false
        //     }))
    }
    render() {
        // let { products, loading, errorMessage } = this.state;
        let { products, loading, errorMessage } = this.props;
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

const mapStatePropsToProps = (state) => {
    return {
        products: state.allProducts.products,
        loading: state.allProducts.loading,
        errorMessage: state.allProducts.errorMessage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => dispatch(getProductsAsyncAction())
    }
};

const storeConnector = connect(mapStatePropsToProps, mapDispatchToProps)
ProductContainer = storeConnector(ProductContainer)

export default ProductContainer
