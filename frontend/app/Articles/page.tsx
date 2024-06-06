'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const ArtikelPage: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [artikels, setArtikels] = useState([]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const fetchArtikels = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/artikels');
        setArtikels(response.data);
      } catch (error) {
        console.error("There was an error fetching the artikels!", error);
      }
    };

    fetchArtikels();
  }, []);

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
            <Link href="/add_articles">
              <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
                Tambah Artikel
              </button>
            </Link>
            <Link href="/add_artikel">
              <button className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center text-white hover:bg-sky-500">
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
              <tr>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  1
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  1
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  Artikel Pertama
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  Ini adalah isi artikel pertama.
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  <img
                    src="/images/artikel_1.jpg"
                    alt="Artikel Pertama"
                    className="w-12 h-12"
                  />
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  Penulis A
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
                  Artikel Kedua
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  Ini adalah isi artikel kedua.
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  <img
                    src="/images/artikel_2.jpg"
                    alt="Artikel Kedua"
                    className="w-12 h-12"
                  />
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  Penulis B
                </td>
                <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                  2024-06-03
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
              {/* Tambahkan lebih banyak baris artikel sesuai kebutuhan */}
            </tbody>
            {/* <tbody>
              {artikels.map((artikel, index) => (
                <tr key={artikel.id}>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {index + 1}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {artikel.id}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {artikel.judul}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {artikel.isi}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    <img
                      src={artikel.gambar}
                      alt={artikel.judul}
                      className="w-12 h-12"
                    />
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {artikel.penulis}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {artikel.tanggal_dibuat}
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
              ))}
            </tbody> */}
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
