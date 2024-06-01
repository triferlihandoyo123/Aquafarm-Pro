'use client'
import React, { useState } from 'react';

const IkanForm: React.FC = () => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [tanggalDibuat, setTanggalDibuat] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();  
    formData.append('nama', nama);
    formData.append('deskripsi', deskripsi);
    if (gambar) {
      formData.append('gambar', gambar);
    }
    formData.append('tanggal_dibuat', tanggalDibuat);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/ikans', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Redirect or handle success accordingly
        console.log('Ikan berhasil ditambahkan.');
      } else {
        // Handle error response
        console.error('Gagal menambahkan ikan.');
      }
    } catch (error) {
      // Handle network error
      console.error('Terjadi kesalahan jaringan:', error);
    }
  };

  const handleBack = () => {
    // Implement logic to navigate back
    console.log('Kembali ke halaman sebelumnya');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
      <h1 className="text-2xl font-semibold text-center mb-5">Tambah Data Ikan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama:</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">Deskripsi:</label>
          <textarea
            id="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">Gambar:</label>
          <input
            type="file"
            id="gambar"
            accept="image/*"
            onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="tanggal_dibuat" className="block text-sm font-medium text-gray-700">Tanggal Dibuat:</label>
          <input
            type="date"
            id="tanggal_dibuat"
            value={tanggalDibuat}
            onChange={(e) => setTanggalDibuat(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300 ease-in-out"
          >
            Tambahkan Ikan
          </button>
        </div>
      </form>
    </div>
  );
};

export default IkanForm;
