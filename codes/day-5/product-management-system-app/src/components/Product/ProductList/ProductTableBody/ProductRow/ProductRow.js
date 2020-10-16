import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductRow({ product }) {
    const imgStyle = {
        width: '50px',
        margin: '2px'
    }
    return (
        <tr>
            <td>
                <Link to={'/products/' + product.productId}>
                    <div className='img img-responsive'>

                        <img
                            src={product.imageUrl}
                            alt='NA'
                            title={product.productName}
                            style={imgStyle}
                        />
                    </div>
                </Link>
            </td>
            <td>
                <Link to={'/update/' + product.productId}>{product.productName}</Link>
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
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow

