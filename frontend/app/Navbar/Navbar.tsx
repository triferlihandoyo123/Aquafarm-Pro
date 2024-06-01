import React from 'react';
import Link from 'next/link';

interface NavbarProps {
    isOpen: boolean;
    toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
    return (
        <div className={`fixed h-screen bg-gray-800 text-white shadow-lg ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out`}>
            <div className="flex items-center justify-between h-20 bg-gray-900 text-lg font-bold px-4">
                <span className={`flex items-center justify-center ${isOpen ? 'block' : 'hidden'} h-12 w-12 rounded-full overflow-hidden`}>
                    <img src="/images/ikan.png" alt="Logo" className="w-full h-full" />
                </span>

                <button onClick={toggleNavbar} className="focus:outline-none">
                    {isOpen ? '←' : '→'}
                </button>
            </div>
            <ul className={`mt-5 ${isOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/">Beranda</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/about">Tentang</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/contact">Kontak</Link>
                </li>
                {/* Tambahkan item menu lainnya sesuai kebutuhan */}
            </ul>
        </div>
    );
};

export default Navbar;
