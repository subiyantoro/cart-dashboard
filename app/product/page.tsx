'use client'

import Table from "@/components/Table";
import { ColumnTable } from "@/utils/type";
import { useEffect } from "react";
import { useFetchProduct } from "./useFetchProduct";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/components/Pagination";

const productColumns: Array<ColumnTable> = [
    {
        id: 'name',
        accessor: 'Name',
    },
    {
        id: 'brand',
        accessor: 'Brand',
    },
    {
        id: 'price',
        accessor: 'Price',
    },
    {
        id: 'stock',
        accessor: 'Stock',
    },
    {
        id: 'category',
        accessor: 'Category',
    },
];

const Page = () => {
    const { meta, products, isLoading, fetchProducts, filter, changeFilter, fetchSearch } = useFetchProduct();

    useEffect(() => {
        if (filter.q !== '') {
            fetchSearch();
        } else {
            fetchProducts();
        }
    }, [filter]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row-reverse">
                <SearchInput filter={filter} onChangeFilter={changeFilter} />
            </div>
            <div className="w-full">
                <Table
                    column={productColumns}
                    data={products}
                    meta={meta}
                    isLoading={isLoading}
                />
            </div>
            <div className="flex flex-row-reverse">
                <Pagination meta={meta} filter={filter} onChangeFilter={changeFilter} />
            </div>
        </div>
    );
}

export default Page;
