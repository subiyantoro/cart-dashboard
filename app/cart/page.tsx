'use client'

import { ColumnTable } from "@/utils/type";
import { useFetchCart } from "./useFetchCart";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/navigation";

const cartColumns: ColumnTable[] = [
    {
        id: 'id',
        accessor: 'Cart Number',
    },
    {
        id: 'total',
        accessor: 'Total',
    },
    {
        id: 'discountedTotal',
        accessor: 'Discounted Total',
    },
    {
        id: 'totalProducts',
        accessor: 'Total Products',
    },
    {
        id: 'totalQuantity',
        accessor: 'Total Quantity',
    },
];

const Page = () => {
    const { carts, filter, meta, isLoading, changeFilter } = useFetchCart();
    const router = useRouter();

    return (
        <div className="flex flex-col w-full">
            <div className="w-full">
                <Table
                    column={cartColumns}
                    data={carts}
                    meta={meta}
                    isLoading={isLoading}
                    rowClickEvent={(id) => router.push(`cart/${id}`)}
                />
            </div>
            <div className="flex flex-row-reverse">
                <Pagination meta={meta} filter={filter} onChangeFilter={changeFilter} />
            </div>
        </div>
    );
};

export default Page;