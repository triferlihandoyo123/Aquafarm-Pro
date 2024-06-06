<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panduan extends Model
{
    use HasFactory;

    protected $table = 'guides'; // Menunjukkan nama tabel yang sesuai
    protected $fillable = ['judul', 'isi', 'gambar', 'penulis', 'tanggal_dibuat'];
}
