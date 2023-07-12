import { getProductList, searchProduct } from "@/services/api";
import { reformatDataProduct } from "@/utils/reformat";
import { FilterTable, ProductList, metaTable } from "@/utils/type"
import { useState } from "react"

export const useFetchProduct = () => {
    const [products, setProducts] = useState<ProductList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState<FilterTable>({
        limit: 10,
        skip: 0,
        q: '',
    });
    const [meta, setMeta] = useState<metaTable>({
        total: 0,
    })

    const changeFilter = (type: string, val: any) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            [type]: val,
        }))
    }

    const fetchProducts = () => {
        setIsLoading(true);
        getProductList(filter)
            .then(res => {
                setProducts(reformatDataProduct(res.data?.products))
                setMeta({
                    total: res.data?.total,
                })
            })
            .catch(() => alert('Failed Get Data'))
            .finally(() => setIsLoading(false))
    }

    const fetchSearch = () => {
        setIsLoading(true);
        searchProduct(filter)
            .then(res => {
                setProducts(reformatDataProduct(res.data?.products))
                setMeta({
                    total: res.data?.total,
                })
            })
            .catch(() => alert('Failed Get Data'))
            .finally(() => setIsLoading(false))
    }

    return {
        meta,
        filter,
        products,
        isLoading,
        fetchProducts,
        fetchSearch,
        changeFilter,
    };
}