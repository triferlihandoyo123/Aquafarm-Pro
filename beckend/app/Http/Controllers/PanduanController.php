<?php

namespace App\Http\Controllers;

use App\Models\Panduan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PanduanController extends Controller
{
    // Menampilkan daftar panduan.
    public function index()
    {
        $panduans = Panduan::all();
        return response()->json($panduans);
    }

    // Menyimpan panduan baru ke penyimpanan.
    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'penulis' => 'required|string|max:100',
            'tanggal_dibuat' => 'required|date',
        ]);

        // Menangani unggah file gambar
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $nama_gambar = time().'.'.$gambar->getClientOriginalExtension();
            $gambar->storeAs('public/panduans', $nama_gambar);
            $url_gambar = asset('storage/panduans/'.$nama_gambar);
        } else {
            $url_gambar = null;
        }

        $panduan = Panduan::create([
            'judul' => $request->judul,
            'isi' => $request->isi,
            'gambar' => $url_gambar,
            'penulis' => $request->penulis,
            'tanggal_dibuat' => $request->tanggal_dibuat,
        ]);

        return response()->json($panduan, 201);
    }

    // Menampilkan detail panduan tertentu.
    public function show($id)
    {
        $panduan = Panduan::findOrFail($id);
        return response()->json($panduan);
    }

    // Memperbarui panduan tertentu di penyimpanan.
    public function update(Request $request, $id)
    {
        $request->validate([
            'judul' => 'string|max:255',
            'isi' => 'string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'penulis' => 'string|max:100',
            'tanggal_dibuat' => 'date',
        ]);

        $panduan = Panduan::findOrFail($id);

        // Jika ada unggah gambar baru, simpan gambar tersebut
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $nama_gambar = time().'.'.$gambar->getClientOriginalExtension();
            $gambar->storeAs('public/panduans', $nama_gambar);
            $url_gambar = asset('storage/panduans/'.$nama_gambar);
            $panduan->gambar = $url_gambar;
        }

        // Update informasi panduan
        $panduan->judul = $request->judul ?? $panduan->judul;
        $panduan->isi = $request->isi ?? $panduan->isi;
        $panduan->penulis = $request->penulis ?? $panduan->penulis;
        $panduan->tanggal_dibuat = $request->tanggal_dibuat ?? $panduan->tanggal_dibuat;
        $panduan->save();

        return response()->json($panduan);
    }

    // Menghapus panduan tertentu dari penyimpanan.
    public function destroy($id)
    {
        $panduan = Panduan::findOrFail($id);
        $panduan->delete();

        return response()->json(['message' => 'Panduan berhasil dihapus.']);
    }
}
