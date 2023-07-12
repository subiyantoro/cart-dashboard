import { FilterTable, metaTable } from "@/utils/type"

const Pagination = ({
    meta,
    filter,
    onChangeFilter,
}: {
    meta: metaTable,
    filter: FilterTable,
    onChangeFilter: (type: string, val: number) => void,
}) => {
    const changePage = (type: string) => {
        if (type === 'PREV') {
            onChangeFilter('skip', filter.skip - filter.limit);
        } else {
            onChangeFilter('skip', filter.skip + filter.limit);
        }
    }
    return (
        <div className="flex flex-row gap-3 mt-5">
            <button
                type="button"
                className={`border-2 rounded-sm px-3 py-2 ${filter.skip === 0 ? 'text-gray-300 border-gray-300' : 'bg-gray-300 border-gray-700'}`}
                disabled={filter.skip === 0}
                onClick={() => changePage('PREV')}
            >
                Prev
            </button>
            <p className="px-3 py-2">{`Page ${filter.skip === 0 ? 1 : (filter.skip / filter.limit) + 1} / ${Math.ceil((meta.total || 0) / filter.limit)}`}</p>
            <button
                type="button"
                className={`border-2 rounded-sm px-3 py-2 ${Math.ceil((meta.total || 0) / filter.limit) === ((filter.skip / filter.limit) + 1) || Math.ceil((meta.total || 0) / filter.limit) === 0 ? 'text-gray-300 border-gray-300' : 'bg-gray-300 border-gray-700'}`}
                onClick={() => changePage('NEXT')}
                disabled={Math.ceil((meta.total || 0) / filter.limit) === ((filter.skip / filter.limit) + 1) || Math.ceil((meta.total || 0) / filter.limit) === 0}
            >
                Next
            </button>
        </div>
    );
}
export default Pagination;
