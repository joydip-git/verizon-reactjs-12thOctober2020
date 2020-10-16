import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'

function ProductTableBody({ products }) {
    return (
        <tbody>
            {
                products.map(p => {
                    return (
                        <ProductRow product={p} key={p.productId} />
                    )
                })
            }
        </tbody>
    )
}

ProductTableBody.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductTableBody

