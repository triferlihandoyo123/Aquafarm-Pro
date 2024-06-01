<?php
namespace App\Http\Controllers;

use App\Models\Panduan;
use Illuminate\Http\Request;

class PanduanController extends Controller
{
    public function index()
    {
        return response()->json(Panduan::all(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'isi' => 'required|string',
            'gambar' => 'required|string',
            'penulis' => 'required|string|max:100',
            'tanggal_dibuat' => 'required|date',
        ]);

        $panduan = Panduan::create($request->all());

        return response()->json($panduan, 201);
    }

    public function show($id)
    {
        $panduan = Panduan::findOrFail($id);
        return response()->json($panduan, 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'judul' => 'string|max:255',
            'isi' => 'string',
            'gambar' => 'string',
            'penulis' => 'string|max:100',
            'tanggal_dibuat' => 'date',
        ]);

        $panduan = Panduan::findOrFail($id);
        $panduan->update($request->all());

        return response()->json($panduan, 200);
    }

    public function destroy($id)
    {
        Panduan::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
