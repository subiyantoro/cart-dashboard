import CartDetail from "@/components/CartDetail";
import Table from "@/components/Table";
import { getCartDetail, getDetailUser } from "@/services/api";
import { ColumnTable } from "@/utils/type";

const productCartColumn: ColumnTable[] = [
    {
        id: 'id',
        accessor: 'id',
    },
    {
        id: 'title',
        accessor: 'Product Name',
    },
    {
        id: 'price',
        accessor: 'Price',
    },
    {
        id: 'quantity',
        accessor: 'Quantity',
    },
    {
        id: 'total',
        accessor: 'Total',
    },
    {
        id: 'discountPercentage',
        accessor: 'Discount',
    },
    {
        id: 'discountedPrice',
        accessor: 'Discount Price',
    },
];

const getDetail = async (id: number): Promise<any> => {
    const response = await getCartDetail(id);
    const responseUser = await getDetailUser(response.data?.userId);

    return {
        data: response.data,
        user: responseUser.data,
    };
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await getDetail(Number(id));
    return (
        <div className="py-10 px-2 w-full">
            <div className="flex flex-col gap-4">
                <h5>{`Cart ${id}`}</h5>
                <CartDetail cartData={data} />
                <Table
                    column={productCartColumn}
                    data={data.data?.products}
                    meta={{ total: data.data?.products.length }}
                />
            </div>
        </div>
    )
}

export default Page;
