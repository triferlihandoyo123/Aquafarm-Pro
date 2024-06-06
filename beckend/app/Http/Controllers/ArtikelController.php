<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artikel;

class ArtikelController extends Controller
{
    public function index()
    {
        return Artikel::all();
    }

    public function show($id)
    {
        return Artikel::find($id);
    }

    public function store(Request $request)
    {
        $artikel = Artikel::create($request->all());
        return response()->json($artikel, 201);
    }

    public function update(Request $request, $id)
    {
        $artikel = Artikel::findOrFail($id);
        $artikel->update($request->all());
        return response()->json($artikel, 200);
    }

    public function destroy($id)
    {
        Artikel::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
