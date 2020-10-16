import Home from "../components/Common/Home/Home";
import AddProduct from "../components/Product/AddProduct/AddProduct";
import ProductDetail from "../components/Product/ProductDetail/ProductDetail";
import UpdateProduct from "../components/Product/UpdateProduct/UpdateProduct";
import ProductContainer from "../containers/Product/ProductContainer";

export const productRoutes = [{
    routeId: 1,
    title: Home,
    route: "/"
}, {
    routeId: 2,
    title: Home,
    route: "/Home"
}, {
    routeId: 3,
    title: ProductContainer,
    route: "/products"
}, {
    routeId: 4,
    title: AddProduct,
    route: "/add"
}, {
    routeId: 5,
    title: UpdateProduct,
    route: "/update/:id"
}, {
    "routeId": 6,
    "title": ProductDetail,
    "route": "/products/:id"
}]