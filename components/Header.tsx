import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Header: React.FC = () => {
    const title = 'Home';
    return (
        <header className="shadow-md">
            <Head>
                <title>{title ? title + ' - Makje' : 'Makje'}</title>
                <meta name="description" content="Online Shop by Makje" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="max-w-5xl h-12  mx-auto flex items-center justify-between px-5 md:px-0">
                <Link href="/" passHref>
                    <a className="font-mono font-black text-2xl text-sky-500">
                        MAKJE
                    </a>
                </Link>

                <div className="flex items-center gap-2 font-semibold text-slate-600">
                    <Link href="/cart" passHref>
                        <a className="rounded-md hover:bg-slate-100 px-2 py-1   hover:text-slate-800 transition ease-in-out">
                            <IoCartOutline className="text-xl" />
                        </a>
                    </Link>
                    <Link href="/login" passHref>
                        <a className="rounded-md hover:bg-slate-100 px-2 py-1   hover:text-slate-800 transition ease-in-out">
                            Login
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
