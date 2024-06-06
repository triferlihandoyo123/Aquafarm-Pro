<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $table = 'artikels';

    protected $fillable = [
        'judul',
        'isi',
        'gambar',
        'penulis',
        'tanggal_dibuat',
    ];

    public $timestamps = false; // Jika Anda tidak menggunakan kolom created_at dan updated_at
}
