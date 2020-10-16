import React, { Component } from 'react'

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            productId: 0,
            productName: '',
            productCode: '',
            description: '',
            releaseDate: '',
            price: 0,
            starRating: 0,
            imageUrl: ''
        }
    }
    submitData = (event) => {

    }
    render() {
        return (
            <div className="container">
                <form className="form-horizontal">

                    <div className="form-group">
                        <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                className="form-control"
                                value={this.state.productId}
                                name='productId'
                                onChange={(e) => this.setState({ productId: parseInt(e.target.value) })}
                                placeholder="product id" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                value={this.state.productName}
                                className="form-control"
                                id="productName"
                                name='productName'
                                placeholder="product name"
                                onChange={(e) => this.setState({ productName: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                value={this.state.productCode}
                                className="form-control" id="productCode" name="productCode" placeholder="product code"
                                onChange={(e) => this.setState({ productCode: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                        <div className="col-sm-10">
                            <input
                                type='date'
                                value={this.state.releaseDate}
                                className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date"
                                onChange={(e) => this.setState({ releaseDate: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                        <div className="col-sm-10">
                            <input
                                type='textarea'
                                value={this.state.description}
                                className="form-control" id="description" name="description" placeholder="product description"
                                onChange={(e) => this.setState({ description: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                        <div className="col-sm-10">
                            <input
                                type='text'
                                value={this.state.price}
                                className="form-control" id="price" name="price" placeholder="product price"
                                onChange={(e) => this.setState({ price: parseFloat(e.target.value) })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                value={this.state.starRating}
                                className="form-control" id="starRating" name="starRating" placeholder="product Rating"
                                onChange={(e) => this.setState({ starRating: parseFloat(e.target.value) })} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                        <div className="col-sm-10">
                            <input
                                type='text'
                                value={this.state.imageUrl}
                                className="form-control" id="imageUrl" name="imageUrl" placeholder="product release date"
                                onChange={(e) => this.setState({ imageUrl: e.target.value })} />
                        </div>
                    </div>
                    <div className="container-fluid"
                        style={{ textAlign: "center" }}>

                        <input type="submit" className="btn btn-primary" value="Add" onClick={this.submitData} />
                        <button type="submit" className="btn btn-alert">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddProduct;