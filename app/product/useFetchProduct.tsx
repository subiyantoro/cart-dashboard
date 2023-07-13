import { getProductList, searchProduct } from "@/services/api";
import { changeSortData, reformatDataProduct, sortData } from "@/utils/reformat";
import { FilterTable, ProductList, SortData, metaTable } from "@/utils/type"
import { useEffect, useState } from "react"

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
    const [sort, setSort] = useState<SortData>({
        accessor: 'name',
        sort: 'DESC',
    });

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
                setProducts(sortData(reformatDataProduct(res.data?.products), sort.accessor, sort.sort))
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
                setProducts(sortData(reformatDataProduct(res.data?.products), sort.accessor, sort.sort))
                setMeta({
                    total: res.data?.total,
                })
            })
            .catch(() => alert('Failed Get Data'))
            .finally(() => setIsLoading(false))
    }

    const changeSort = (newAccessor: string) => changeSortData(newAccessor, setSort);

    useEffect(() => {
        setProducts(sortData(products, sort.accessor, sort.sort));
    }, [sort, filter]);

    return {
        meta,
        filter,
        products,
        isLoading,
        fetchProducts,
        fetchSearch,
        changeFilter,
        changeSort,
        sort,
    };
}