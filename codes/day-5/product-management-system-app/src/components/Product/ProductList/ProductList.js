import React from 'react'
import PropTypes from 'prop-types'
import ProductTableBody from './ProductTableBody/ProductTableBody'
import ProuctHeaderRow from './ProductHeaderRow/ProductHeaderRow'


function ProductList({ products }) {
    return (
        <>
            <div className='panel panel-heading'>
                <h4>{products.length} Record(s) found....</h4>
            </div>
            <div className='panel panel-body'>
                <div className='table-responsive'>
                    <table className='table'>
                        <ProuctHeaderRow />
                        <ProductTableBody products={products} />
                    </table>
                </div>
            </div>
        </>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList


