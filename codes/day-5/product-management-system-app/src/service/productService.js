import Axios from 'axios'

const url = 'http://127.0.0.1:8081/productservice';

export const getProducts = () => {
    return Axios.get(url); //[]
}

export const getProductById = (productId) => {
    return Axios.get(url + '/' + productId); //product
}

export const addProduct = (product) => {
    return Axios.post(url, product);//{message:'', data:[]}
}

export const updateProduct = (product) => {
    return Axios.put(url, product); //{message:'', data:[]}
}

export const deleteProduct = (productId) => {
    return Axios.delete(url + '/' + productId); //{message:'', data:[]}
}

