export type MenuList = {
    id: string,
    label: string,
    path: string,
};

export type ColumnTable = {
    id: string,
    accessor: string,
};

export type ProductList = {
    id: number,
    name: string,
    brand: string,
    price: number,
    stock: number,
    category: string,
};

export type metaTable = {
    total?: number | undefined,
};

export type FilterTable = {
    limit: number,
    skip: number,
    q: string,
};

export type ProductOnCart = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    total: number,
    discountPercent: number,
    discountPrice: number,
}

export type Cart = {
    id: number,
    products: ProductOnCart[],
    total: number,
    userId: number,
    discountedTotal: number,
    totalProducts: number,
    totalQuantity: number,
}

export type SortData = {
    accessor: string,
    sort: 'ASC' | 'DESC'
}