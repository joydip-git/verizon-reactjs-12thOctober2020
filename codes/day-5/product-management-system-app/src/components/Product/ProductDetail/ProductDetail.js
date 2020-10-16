import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams, Link, Redirect } from 'react-router-dom'
//import { getProductById } from '../../../service/productService';
import { useSelector, useDispatch } from 'react-redux'
import { getProductAsyncAction } from '../../../redux/actions/getProductActions'

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

    const product = useSelector((state) => state.singleProduct.product);
    const loading = useSelector((state) => state.singleProduct.loading);
    const errorMessage = useSelector((state) => state.singleProduct.errorMessage);
    const dispatch = useDispatch();

    // const [productState, setProductstate] = useState({ error: '', loading: true, product: null });

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        // getProductById(parseInt(params.id))
        //     .then(resp => setProductstate({ error: '', loading: false, product: resp.data }))
        //     .catch(e => setProductstate({ error: e.message, loading: false, product: null }))
        dispatch(getProductAsyncAction(parseInt(params.id)))
        return () => {

        }
    }, [])

    let design = null;

    // if (productState.loading) {
    //if (productState.error !== '')
    //if (productState.product === null) 
    if (loading) {
        design = <span>Loading...</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (product === null) {
        design = <span>product not found</span>
    } else {
        design = (
            <>
                <div className='panel panel-primary'>
                    <div className='panel-heading' style={{ fontSize: 'large' }}>
                        {product.productName}
                        <Link to={'/update/' + product.productId} className='btn btn-primary' style={{ width: '80px', float: 'right' }}>
                            Edit
                        </Link>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{product.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{product.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{product.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{product.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>

                                    <div className='col-md-6'>{product.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>5 Star Rating:</div>
                                    <div className='col-md-6'>
                                        {product.starRating}
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img
                                    className='center-block img-responsive'
                                    style={{ width: '200px', margin: '2px' }}
                                    src={product.imageUrl}
                                    title={product.productName} />
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
