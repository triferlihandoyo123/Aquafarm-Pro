'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import IkanForm from '../add_ikan/page';

const Dashboard: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="bg-emerald-700 w-screen h-screen flex">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

      <div className={`transition-all duration-300 ${isNavbarOpen ? 'ml-64' : 'ml-16'} p-5 w-full`}>
        <nav className="flex justify-center mb-5">
          <Link href="/add_ikan">
            <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
              Tambah Data
            </button>
          </Link>
          <Link href="/add_ikan">
            <button className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center text-white">
              Refresh Data
            </button>
          </Link>
        </nav>

        <table className="w-full mt-5">
          <thead>
            <tr>
              <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                No
              </th>
              <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                ID
              </th>
              <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                Nama
              </th>
              <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                Deskripsi
              </th>
              <th className="w-1/6 border-2 border-slate-300 bg-black text-white h-10 text-center">
                Gambar
              </th>
              <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                Tanggal Dibuat
              </th>
              <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Contoh data ikan statis */}
            <tr>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                1
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                1
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Nemo
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Kecil yang Lucu
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <img
                  src="/images/ikan_nemo.jpg"
                  alt="Ikan Nemo"
                  className="w-12 h-12"
                />
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                2024-06-02
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                  Edit
                </button>
                <button className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1">
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                2
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                2
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Gurame
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Gurame Asli
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <img
                  src="/images/ikan_gurame.jpg"
                  alt="Ikan Gurame"
                  className="w-12 h-12"
                />
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                2024-06-02
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                  Edit
                </button>
                <button className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1">
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                3
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                3
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Cupang
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                Ikan Cupang Warna-warni
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <img
                  src="/images/ikan_cupang.jpg"
                  alt="Ikan Cupang"
                  className="w-12 h-12"
                />
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                2024-06-02
              </td>
              <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                <button className="bg-sky-700 text-white px-3 py-2 rounded-md mr-1">
                  Edit
                </button>
                <button className="bg-rose-700 text-white px-3 py-2 rounded-md ml-1">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
