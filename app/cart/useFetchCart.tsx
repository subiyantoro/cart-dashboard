import { getCartList } from "@/services/api";
import { changeSortData, reformatDataCart, sortData } from "@/utils/reformat";
import { Cart, FilterTable, SortData, metaTable } from "@/utils/type"
import { useEffect, useState } from "react"

export const useFetchCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState<FilterTable>({
        limit: 10,
        skip: 0,
        q: '',
    })
    const [meta, setMeta] = useState<metaTable>({
        total: 0,
    });
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

    const fetchCarts = () => {
        setIsLoading(true);
        getCartList(filter)
            .then(res => {
                setCarts(sortData(reformatDataCart(res.data?.carts), sort.accessor, sort.sort));
                setMeta({
                    total: res.data?.total,
                });
            })
            .catch(() => alert('Failed get carts'))
            .finally(() => setIsLoading(false))
    }

    const changeSort = (newAccessor: string) => changeSortData(newAccessor, setSort);

    useEffect(() => {
        fetchCarts();
    }, [filter, sort]);

    return {
        sort,
        meta,
        carts,
        isLoading,
        filter,
        fetchCarts,
        changeFilter,
        changeSort,
    }
}