'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import PanduanForm from '../add_panduan/page'; // Ganti dengan komponen PanduanForm yang sebelumnya Anda buat

const PanduanPage: React.FC = () => { // Ganti nama komponen dari Dashboard menjadi PanduanPage
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="bg-emerald-700 w-screen h-screen flex">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

      <div className={`transition-all duration-300 ${isNavbarOpen ? 'ml-64' : 'ml-16'} p-5 w-full`}>
        <nav className="flex justify-center mb-5">
          <Link href="/add_panduan"> {/* Ganti tautan navigasi untuk menambah data */}
            <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
              Tambah Panduan {/* Ganti label tombol menjadi "Tambah Panduan" */}
            </button>
          </Link>
          <Link href="/add_panduan"> {/* Ganti tautan navigasi untuk menyegarkan data jika diperlukan */}
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
            {/* Ganti data ikan statis dengan data panduan dari API */}
            {/* Anda perlu mengambil data panduan dari API dan mengganti data statis di sini */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanduanPage;
