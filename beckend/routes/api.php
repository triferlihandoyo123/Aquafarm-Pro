<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IkanController;



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/ikans', [IkanController::class, 'store']);
Route::get('/ikans', [IkanController::class, 'index']);
Route::get('/ikans/{id}', [IkanController::class, 'show']);
Route::put('/ikans/{id}', [IkanController::class, 'update']);
Route::delete('/ikans/{id}', [IkanController::class, 'destroy']);

