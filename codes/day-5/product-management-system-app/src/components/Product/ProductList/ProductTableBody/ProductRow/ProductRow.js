import React from 'react'
import PropTypes from 'prop-types'

function ProductRow({ product }) {
    const imgStyle = {
        width: '50px',
        margin: '2px'
    }
    return (
        <tr>
            <td>
                <div className='img img-responsive'>
                    <img
                        src={product.imageUrl}
                        alt='NA'
                        title={product.productName}
                        style={imgStyle}
                    />
                </div>
            </td>
            <td>
                {product.productName}
            </td>
            <td>
                {product.productCode}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.starRating}
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow

