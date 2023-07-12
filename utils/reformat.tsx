import { Cart, ProductList } from "./type";

export const reformatDataProduct = (productList: Array<any>): Array<ProductList> => {
    return productList.map(item => ({
        id: item.id,
        name: item.title,
        brand: item.brand,
        price: item.price,
        stock: item.stock,
        category: item.category,
    }));
}

export const reformatDataCart = (cartList: any[]): Cart[] => {
    return cartList.map(cart => ({
        id: cart.id,
        products: cart.products,
        total: cart.total,
        userId: cart.userId,
        totalProducts: cart.totalProducts,
        totalQuantity: cart.totalQuantity,
        discountedTotal: cart.discountedTotal,
    }));
}