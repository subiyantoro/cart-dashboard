import { ColumnTable, FilterTable, SortData, metaTable } from "@/utils/type";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

interface TableProps {
    column: Array<ColumnTable>,
    data: Array<any>,
    meta: metaTable,
    isLoading?: boolean,
    rowClickEvent?: (id?: number) => void,
    isSort?: boolean
    onSortChange?: (accessor: string) => void,
    sortData?: SortData,
}

const Table = (
    { column, data, isLoading, rowClickEvent, isSort = false, onSortChange, sortData }: TableProps
) => {
    const keyColumn = column.map(col => Object.entries(col).map(([key, val]) => val)[0]);

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    {column.map(col => (
                        <th key={col.id} className="pr-5 font-black cursor-pointer" {...isSort && { onClick: () => onSortChange?.(col.id) }}>
                            <div className="flex flex-row justify-between text-center">
                                {col.accessor}
                                {sortData?.sort === 'ASC' && sortData.accessor === col.id && <ChevronDownIcon className="h-4 w-4 text-black" />}
                                {sortData?.sort === 'DESC' && sortData.accessor === col.id && <ChevronUpIcon className="h-4 w-4 text-black" />}
                                {sortData?.accessor !== col.id && <ChevronDownIcon className="h-4 w-4 text-black" />}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {isLoading ? (<tr>
                    <th colSpan={column.length} className="text-center">
                        Loading...
                    </th>
                </tr>) : data.length === 0 ? (
                    <tr>
                        <th colSpan={column.length} className="text-center">No Data</th>
                    </tr>
                ) : data.map(dat => {
                    return (
                        <tr key={dat.id} className="hover:bg-gray-500 cursor-pointer" {...rowClickEvent && { onClick: () => rowClickEvent?.(dat.id) }}>
                            {keyColumn.map(key => key === 'id' ? (
                                <td className="px-2" key={key}>{`Cart ${dat[key]}`}</td>
                            ) : (
                                <td className="px-2" key={key}>{dat[key]}</td>
                            ))}
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    );
};

export default Table;