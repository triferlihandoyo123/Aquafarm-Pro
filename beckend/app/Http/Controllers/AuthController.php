<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Mlogin;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $login = Mlogin::where('username', $request->username)->first();

        if ($login && Hash::check($request->password, $login->password)) {
            // Login user
            Auth::login($login);

            // Check user role and redirect accordingly
            if ($login->role == 'admin') {
                return response()->json(['message' => 'Login successful', 'redirect' => 'admin']);
            } elseif ($login->role == 'users') {
                return response()->json(['message' => 'Login successful', 'redirect' => 'users']);
            }

            return response()->json(['message' => 'Login successful']);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:logins',
            'password' => 'required|min:6',
            'role' => '',

        ]);

        $login = new MLogin();
        $login->username = $request->username;
        $login->password = Hash::make($request->password);

        // Tetapkan nilai default 'users' jika kolom 'role' tidak ada atau kosong
        $login->role = $request->filled('role') ? $request->role : 'users';

        $login->save();

        return response()->json(['message' => 'User registered successfully'])
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Access-Control-Allow-Methods', '*');
    }

    public function logout(Request $request)
    {
        $login = auth()->user();

        if ($login) {
            $login->tokens()->delete();
            auth()->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return response()->json(['message' => 'Successfully logged out'], 200)
                ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }

        return response()->json(['message' => 'No user logged in'], 401)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }
}
