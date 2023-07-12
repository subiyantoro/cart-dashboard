import fetchApi from "./fetchApi";

const baseUrl: string = 'https://dummyjson.com';
const endpoint = {
    productList: 'products',
    cart: 'carts',
    searchProduct: 'products/search',
    user: 'users',
};

const getProductList = (payload: any) => fetchApi(`${baseUrl}/${endpoint.productList}`, 'GET', payload);
const searchProduct = (payload: any) => fetchApi(`${baseUrl}/${endpoint.searchProduct}`, 'GET', payload);
const getCartList = (payload: any) => fetchApi(`${baseUrl}/${endpoint.cart}`, 'GET', payload);
const getCartDetail = (id: number) => fetchApi(`${baseUrl}/${endpoint.cart}/${id}`, 'GET', null);
const getDetailUser = (id: number) => fetchApi(`${baseUrl}/${endpoint.user}/${id}`, 'GET');

export {
    getProductList,
    searchProduct,
    getCartList,
    getCartDetail,
    getDetailUser,
}
