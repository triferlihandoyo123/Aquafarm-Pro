<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IkanController;



Route::post('/register', [AuthController::class, 'register'])->middleware('api');
Route::post('/login', [AuthController::class, 'login'])->middleware('api');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('api');

// Menambahkan route untuk menyimpan ikan baru
Route::post('/ikans', [IkanController::class, 'store']);

// Menambahkan route untuk menampilkan daftar ikan
Route::get('/ikans', [IkanController::class, 'index']);

// Menambahkan route untuk menampilkan detail ikan tertentu
Route::get('/ikans/{id}', [IkanController::class, 'show']);

// Menambahkan route untuk memperbarui informasi ikan tertentu
Route::put('/ikans/{id}', [IkanController::class, 'update']);

// Menambahkan route untuk menghapus ikan tertentu
Route::delete('/ikans/{id}', [IkanController::class, 'destroy']);

Route::post('/panduan', [PanduanController::class, 'store']);
Route::get('/panduan', [PanduanController::class, 'index']);
Route::get('/panduan/{id}', [PanduanController::class, 'show']);
Route::put('/panduan/{id}', [PanduanController::class, 'update']);
Route::delete('/panduan/{id}', [PanduanController::class, 'destroy']);

Route::post('/artikels', [ArtikelController::class, 'store']);
Route::get('/artikels', [ArtikelController::class, 'index']);
Route::get('/artikels/{id}', [ArtikelController::class, 'show']);
Route::put('/artikels/{id}', [ArtikelController::class, 'update']);
Route::delete('/artikels/{id}', [ArtikelController::class, 'destroy']);
