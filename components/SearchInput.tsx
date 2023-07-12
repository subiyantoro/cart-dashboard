'use client'

import { FilterTable } from "@/utils/type";

interface SearchProps {
    filter: FilterTable,
    onChangeFilter: (type: string, val: any) => void,
}

const SearchInput = (props: SearchProps) => (
    <div className="flex flex-row-reverse">
        <input
            className="pl-4 pr-4 py-2 border-2 mb-5 border-gray-300 rounded-md"
            onChange={val => {
                props.onChangeFilter('q', val.target.value)
                props.onChangeFilter('skip', 0);
            }}
            placeholder="Search Product"
        />
    </div>
)

export default SearchInput;
