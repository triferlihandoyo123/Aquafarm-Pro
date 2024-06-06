<?php

namespace App\Http\Controllers;

use App\Models\Ikan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Tambahkan ini


class IkanController extends Controller
{
    // Menampilkan daftar ikan.
    public function index()
    {
        $ikans = Ikan::all();
        return response()->json($ikans);
    }

    // Menampilkan form untuk membuat ikan baru.
    public function create()
    {
        // Tidak dibutuhkan untuk API, hapus atau sesuaikan jika diperlukan
    }

    // Menyimpan ikan baru ke penyimpanan.
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tanggal_dibuat' => 'required|date',
        ]);

        // Menangani unggah file gambar
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $nama_gambar = time().'.'.$gambar->getClientOriginalExtension();
            $gambar->storeAs('public/ikans', $nama_gambar);
            $url_gambar = asset('storage/ikans/'.$nama_gambar);
        } else {
            $url_gambar = null;
        }

        $ikan = Ikan::create([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'gambar' => $url_gambar,
            'tanggal_dibuat' => $request->tanggal_dibuat,
        ]);

        return response()->json($ikan, 201);
    }

    // Menampilkan detail ikan tertentu.
    public function show(Ikan $ikan)
    {
        return response()->json($ikan);
    }

    // Menampilkan form untuk mengedit ikan tertentu.
    public function edit(Ikan $ikan)
    {
        // Tidak dibutuhkan untuk API, hapus atau sesuaikan jika diperlukan
    }

    // Memperbarui ikan tertentu di penyimpanan.
    public function update(Request $request, Ikan $ikan)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tanggal_dibuat' => 'required|date',
        ]);

        // Jika ada unggah gambar baru, simpan gambar tersebut
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $nama_gambar = time().'.'.$gambar->getClientOriginalExtension();
            $gambar->storeAs('public/ikans', $nama_gambar);
            $url_gambar = asset('storage/ikans/'.$nama_gambar);
            $ikan->gambar = $url_gambar;
        }

        // Update informasi ikan
        $ikan->nama = $request->nama;
        $ikan->deskripsi = $request->deskripsi;
        $ikan->tanggal_dibuat = $request->tanggal_dibuat;
        $ikan->save();

        return response()->json($ikan);
    }

    // Menghapus ikan tertentu dari penyimpanan.
    public function destroy(Ikan $ikan)
    {
        $ikan->delete();
        return response()->json(['message' => 'Ikan berhasil dihapus.']);
    }
}
