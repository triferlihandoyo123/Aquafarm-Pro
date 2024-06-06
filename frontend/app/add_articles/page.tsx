'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AddArticlePage: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [penulis, setPenulis] = useState('');
  const router = useRouter();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('isi', isi);
    if (gambar) formData.append('gambar', gambar);
    formData.append('penulis', penulis);

    try {
      await axios.post('http://localhost:8000/api/artikels', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Artikel berhasil ditambahkan!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Terjadi kesalahan saat mengirim data');
    }
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
            <Link href="/add_article">
              <button className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center">
                Tambah Artikel
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center text-white">
                Kembali
              </button>
            </Link>
          </nav>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Tambah Artikel</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="judul">
                Judul
              </label>
              <input
                id="judul"
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isi">
                Isi
              </label>
              <textarea
                id="isi"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gambar">
                Gambar
              </label>
              <input
                id="gambar"
                type="file"
                onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="penulis">
                Penulis
              </label>
              <input
                id="penulis"
                type="text"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Tambah Artikel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticlePage;
