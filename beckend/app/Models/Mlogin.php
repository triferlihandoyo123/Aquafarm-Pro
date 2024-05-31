<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

class Mlogin extends Authenticatable
{
    use HasFactory;

    protected $table = 'logins'; // Menentukan nama tabel

    protected $fillable = [
        'username',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Log out the current user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public static function logout()
    {

        return response()->json(['message' => 'Logout successful']);
    }
}
