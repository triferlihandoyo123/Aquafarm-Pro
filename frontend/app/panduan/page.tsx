'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';

interface Panduan {
  id: number;
  judul: string;
  isi: string;
  gambar: string;
  penulis: string;
  tanggal_dibuat: string;
}

const PanduanPage: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [panduans, setPanduans] = useState<Panduan[]>([]);

  useEffect(() => {
    const fetchPanduans = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/panduan'); // Ganti URL dengan URL API Anda
        if (response.ok) {
          const data = await response.json();
          setPanduans(data);
        } else {
          console.error('Failed to fetch panduans');
        }
      } catch (error) {
        console.error('Error while fetching panduans:', error);
      }
    };

    fetchPanduans();
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="bg-emerald-700 w-screen h-screen flex flex-col">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className="flex justify-end items-center p-4 bg-emerald-800">
        <button className="mr-4 bg-gray-600 px-4 py-2 rounded text-white">Setting</button>
        <button className="bg-red-600 px-4 py-2 rounded text-white">Log Out</button>
      </div>
      <div className="flex flex-grow">
        <div className={`transition-all duration-300 ${isNavbarOpen ? 'ml-64' : 'ml-16'} p-5 w-full`}>
          <nav className="flex justify-center mb-5">
            <Link href="/add_panduan">
              <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
                Tambah Data
              </button>
            </Link>
            <Link href="/panduan">
              <button className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center text-white">
                Refresh Data
              </button>
            </Link>
          </nav>

          <table className="w-full mt-5 align-middle">
            <thead>
              <tr>
                <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                  No
                </th>
                <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                  ID
                </th>
                <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                  Judul
                </th>
                <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                  Isi
                </th>
                <th className="w-1/6 border-2 border-slate-300 bg-black text-white h-10 text-center">
                  Gambar
                </th>
                <th className="w-1/12 border-2 border-slate-300 bg-black text-white h-10 text-center">
                  Penulis
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
              {panduans.map((panduan, index) => {
                const maxLength = 100;
                const truncatedIsi = panduan.isi.length > maxLength
                  ? `${panduan.isi.substring(0, maxLength)}...`
                  : panduan.isi;

                return (
                  <tr key={index}>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {index + 1}
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {panduan.id}
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {panduan.judul}
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {truncatedIsi}
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      <div className="flex justify-center items-center">
                        <img
                          src={panduan.gambar}
                          alt={panduan.judul}
                          className="w-12 h-12"
                        />
                      </div>
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {panduan.penulis}
                    </td>
                    <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                      {panduan.tanggal_dibuat}
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PanduanPage;
