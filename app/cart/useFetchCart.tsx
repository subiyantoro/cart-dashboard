import { getCartList } from "@/services/api";
import { reformatDataCart } from "@/utils/reformat";
import { Cart, FilterTable, metaTable } from "@/utils/type"
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
                setCarts(reformatDataCart(res.data?.carts));
                setMeta({
                    total: res.data?.total,
                });
            })
            .catch(() => alert('Failed get carts'))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchCarts();
    }, [filter]);

    return {
        meta,
        carts,
        isLoading,
        filter,
        fetchCarts,
        changeFilter,
    }
}