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

export const sortData = (data: any[], accessor: string, sort: 'ASC' | 'DESC') => {
    const dataToSort = data.slice();
    if (sort === 'DESC') dataToSort.sort((x, y) => {
        const nameX = typeof x[accessor] === 'string' ? x[accessor].toUpperCase() : x[accessor];
        const nameY = typeof y[accessor] === 'string' ? y[accessor].toUpperCase() : y[accessor];
        if (nameX < nameY) return 1;
        if (nameX > nameY) return -1;
        return 0;
    });
    if (sort === 'ASC') dataToSort.sort((x, y) => {
        const nameX = typeof x[accessor] === 'string' ? x[accessor].toUpperCase() : x[accessor];
        const nameY = typeof y[accessor] === 'string' ? y[accessor].toUpperCase() : y[accessor];
        if (nameX < nameY) return -1;
        if (nameX > nameY) return 1;
        return 0;
    });

    return dataToSort;
}