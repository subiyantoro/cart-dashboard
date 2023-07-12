'use client'

import { MenuList } from "@/utils/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useLayoutEffect, useState } from "react";

const Navbar = ({ menu }: { menu: Array<MenuList> }) => {
    const currentPath: string = usePathname();
    const [hideMenu, setHideMenu] = useState(false);

    const widthChange = () => {
        if (window.innerWidth >= 767) {
            setHideMenu(false);
        } else if (window.innerWidth <= 768) {
            setHideMenu(true);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', widthChange);

        return () => window.removeEventListener('resize', widthChange);
    }, []);

    return (
        <div
            className="
                bg-gray-300
                w-screen
                md:min-h-screen
                float-left
                list-none
                m-0
                p-0
                md:w-2/12
            "
        >
            <ul className="py-5 max-md:flex max-md:justify-between">
                <li key="title" className="block pl-5 py-2">
                    <Link href="/">
                        Admin Cart
                    </Link>
                </li>
                <li key="menu" className="hidden max-md:block">
                    <button onClick={() => setHideMenu(!hideMenu)} className="m-2">
                        <Bars3Icon className="h-6 w-6 text-black" />
                    </button>
                </li>
            </ul>
            <ul>
                {!hideMenu && (
                    menu.map(x => (
                        <li key={x.id} className={`pl-5 py-2 block max-md:${hideMenu ? 'hidden' : 'block'}`}>
                            <Link href={x.path} className={`block text-black align-center no-underline py-2 px-4 ${currentPath === x.path && 'border-l-4 border-purple-500 text-purple-500'}`}>
                                {x.label}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
export default Navbar;
