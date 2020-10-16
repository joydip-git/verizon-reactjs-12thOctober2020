import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams, Link, Redirect } from 'react-router-dom'
import { getProductById } from '../../../service/productService';

// export default function ProductDetail(props) {
//     const { history, match, location } = props;
//     console.log(props)
//     // console.log(match.params.id)
//     // const params = useParams();
//     // console.log(params.id)
//     // const history = useHistory();
//     // const location = useLocation();

//     return (
//         <div>
//             Detail
//         </div>
//     )
// }

export default function ProductDetail() {

    const [productState, setProductstate] = useState({ error: '', loading: true, product: null });

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        getProductById(parseInt(params.id))
            .then(resp => setProductstate({ error: '', loading: false, product: resp.data }))
            .catch(e => setProductstate({ error: e.message, loading: false, product: null }))
        return () => {

        }
    }, [])

    let design = null;

    if (productState.loading) {
        design = <span>Loading...</span>
    } else if (productState.error !== '') {
        design = <span>{productState.error}</span>
    } else if (productState.product === null) {
        design = <span>product not found</span>
    } else {
        design = (
            <>
                <div classNameName='panel panel-primary'>
                    <div className='panel-heading' style={{ fontSize: 'large' }}>
                        {productState.product.productName}
                        <Link to={'/update/' + productState.product.productId} className='btn btn-primary' style={{ width: '80px', float: 'right' }}>
                            Edit
                        </Link>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{productState.product.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{productState.product.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{productState.product.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{productState.product.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>

                                    <div className='col-md-6'>{productState.product.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>5 Star Rating:</div>
                                    <div className='col-md-6'>
                                        {productState.product.starRating}
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img
                                    className='center-block img-responsive'
                                    style={{ width: '200px', margin: '2px' }}
                                    src={productState.product.imageUrl}
                                    title={productState.product.productName} />
                            </div>
                        </div>
                    </div>

                    {/* <div className='panel-footer'>
                        <button className='btn btn-primary'
                            style={{ width: '80px' }}
                            onClick={() => { <Redirect to='/products' /> }}>
                            <i className='glyphicon glyphicon-chevron-left'></i>
                            Back
                        </button>
                    </div> */}
                    <div className='panel-footer'>
                        <button className='btn btn-primary'
                            style={{ width: '80px' }}
                            onClick={() => history.push('/products')}>
                            <i className='glyphicon glyphicon-chevron-left'></i>
                            Back
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return design;
}
