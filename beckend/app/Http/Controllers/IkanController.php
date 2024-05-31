<?php

namespace App\Http\Controllers;

use App\Models\Ikan;
use Illuminate\Http\Request;

class IkanController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $ikans = Ikan::all();
        return view('ikans.index', compact('ikans'));
    }

    // Show the form for creating a new resource.
    public function create()
    {
        return view('ikans.create');
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tanggal_dibuat' => 'required|date',
        ]);

        // Handle file upload
        if ($request->hasFile('gambar')) {
            $imageName = time().'.'.$request->gambar->extension();
            $request->gambar->move(public_path('images'), $imageName);
        }

        Ikan::create([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'gambar' => $imageName,
            'tanggal_dibuat' => $request->tanggal_dibuat,
        ]);

        return redirect()->route('ikans.index')->with('success', 'Ikan berhasil ditambahkan.');
    }

    // Display the specified resource.
    public function show(Ikan $ikan)
    {
        return view('ikans.show', compact('ikan'));
    }

    // Show the form for editing the specified resource.
    public function edit(Ikan $ikan)
    {
        return view('ikans.edit', compact('ikan'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, Ikan $ikan)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'tanggal_dibuat' => 'required|date',
        ]);

        if ($request->hasFile('gambar')) {
            $imageName = time().'.'.$request->gambar->extension();
            $request->gambar->move(public_path('images'), $imageName);
            $ikan->gambar = $imageName;
        }

        $ikan->nama = $request->nama;
        $ikan->deskripsi = $request->deskripsi;
        $ikan->tanggal_dibuat = $request->tanggal_dibuat;
        $ikan->save();

        return redirect()->route('ikans.index')->with('success', 'Ikan berhasil diperbarui.');
    }

    // Remove the specified resource from storage.
    public function destroy(Ikan $ikan)
    {
        $ikan->delete();
        return redirect()->route('ikans.index')->with('success', 'Ikan berhasil dihapus.');
    }
}
