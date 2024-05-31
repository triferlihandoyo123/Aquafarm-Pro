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
      const response = await fetch('/api/ikans', {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nama">Nama:</label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="deskripsi">Deskripsi:</label>
        <textarea
          id="deskripsi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="gambar">Gambar:</label>
        <input
          type="file"
          id="gambar"
          accept="image/*"
          onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
          required
        />
      </div>
      <div>
        <label htmlFor="tanggal_dibuat">Tanggal Dibuat:</label>
        <input
          type="date"
          id="tanggal_dibuat"
          value={tanggalDibuat}
          onChange={(e) => setTanggalDibuat(e.target.value)}
          required
        />
      </div>
      <button type="submit">Tambahkan Ikan</button>
    </form>
  );
};

export default IkanForm;
