'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import IkanForm from '../add_ikan/page';

interface Ikan {
  id: number;
  nama: string;
  deskripsi: string;
  gambar: string;
  tanggal_dibuat: string;
}
const handleLogout = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      // Tambahkan opsi lainnya seperti header jika diperlukan
    });
    if (response.ok) {
      console.log('Logout successful');
      // Lakukan sesuatu setelah logout berhasil
    } else {
      console.error('Failed to logout');
    }
  } catch (error) {
    console.error('Error while logging out:', error);
  }
};


const Dashboard: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [ikans, setIkans] = useState<Ikan[]>([]); // State untuk menyimpan data ikan

  useEffect(() => {
    const fetchIkans = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/ikans'); // Ganti URL dengan URL API Anda
        if (response.ok) {
          const data = await response.json();
          setIkans(data);
        } else {
          console.error('Failed to fetch ikans');
        }
      } catch (error) {
        console.error('Error while fetching ikans:', error);
      }
    };

    fetchIkans();
  }, []); // Panggil useEffect hanya sekali saat komponen dimuat

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="bg-emerald-700 w-screen h-screen flex flex-col">
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className="flex justify-end items-center p-4 bg-emerald-800">
        <button className="mr-4 bg-gray-600 px-4 py-2 rounded text-white">Setting</button>
        <button className="bg-red-600 px-4 py-2 rounded text-white" onClick={handleLogout}>Log Out</button>
      </div>
      <div className="flex flex-grow">

        <div className={`transition-all duration-300 ${isNavbarOpen ? 'ml-64' : 'ml-16'} p-5 w-full`}>
          <nav className="flex justify-center mb-5">
            <Link href="/add_ikan">
              <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
                Tambah Data
              </button>
            </Link>
            <Link href="/dashboardA">
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
                  Nama
                </th>
                <th className="w-auto border-2 border-slate-300 bg-black text-white h-10 text-center">
                  Deskripsi
                </th>
                <th className="w-1/6 border-2 border-slate-300 bg-black text-white h-10 text-centerr">
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
              {ikans.map((ikan, index) => (
                <tr key={index}>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {index + 1}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {ikan.id}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {ikan.nama}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {ikan.deskripsi}
                  </td>
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    <div className="flex justify-center items-center">
                      <img
                        src={ikan.gambar}
                        alt={ikan.nama}
                        className="w-12 h-12"
                      />
                    </div>
                  </td>
                
                  <td className="border-2 border-slate-300 bg-white text-black h-8 text-center">
                    {ikan.tanggal_dibuat}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
