'use client'
import React, { useState } from 'react';

const DataForm: React.FC = () => {
  const [id, setId] = useState('');
  const [nama, setNama] = useState('');
  const [usia, setUsia] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('nama', nama);
    formData.append('usia', usia);
    formData.append('alamat', alamat);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/data', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Redirect or handle success accordingly
        console.log('Data berhasil ditambahkan.');
      } else {
        // Handle error response
        console.error('Gagal menambahkan data.');
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
      <h1 className="text-2xl font-semibold text-center mb-5">Tambah Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
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
          <label htmlFor="usia" className="block text-sm font-medium text-gray-700">Usia:</label>
          <input
            type="number"
            id="usia"
            value={usia}
            onChange={(e) => setUsia(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat:</label>
          <textarea
            id="alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          ></textarea>
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
            Tambahkan Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
