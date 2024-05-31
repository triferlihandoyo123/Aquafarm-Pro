<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\MLogin;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:logins',
            'password' => 'required|min:6',
            'role' => ''
        ]);

        $login = new MLogin();
        $login->username = $request->username;
        $login->password = Hash::make($request->password);
        $login->role = 'users';
        $login->save();

        return response()->json(['message' => 'User registered successfully'])
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    public function logout(Request $request)
    {
        $login = auth()->user();

        if ($login) {
            $login->tokens()->delete();
            auth()->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return response()->json(['message' => 'Successfully logged out'], 200);
        }

        return response()->json(['message' => 'No user logged in'], 401);
    }
}
