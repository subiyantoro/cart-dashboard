
const CartDetail = ({
    cartData
}: { cartData: any }) => (
    <div className="w-full bg-gray-300 border-2 border-gray-600 p-10">
        <div className="grid grid-cols-2">
            <p className="detailInfo">User: {`${cartData?.user?.firstName} ${cartData?.user?.lastName}`}</p>
            <p className="detailInfo"># of Items: {cartData?.data.totalProducts}</p>
            <p className="detailInfo">Added On : 12 July 2023 {`(it's static data because dummyjson not provide)`}</p>
            <p className="detailInfo">Total Amount: {cartData?.data.total}</p>
        </div>
    </div>
)

export default CartDetail;
