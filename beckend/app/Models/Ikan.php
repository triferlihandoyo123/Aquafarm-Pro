<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ikan extends Model
{
    protected $table = 'ikans'; // Nama tabel dalam basis data

    protected $fillable = [
        'nama', 'deskripsi', 'gambar', 'tanggal_dibuat'
    ];

    // Atau, jika Anda menggunakan guarded properties
    // protected $guarded = [];

    // Jika nama kolom primary key bukan 'id'
    // protected $primaryKey = 'id_ikan';

    // Jika tidak ingin menggunakan kolom timestamps 'created_at' dan 'updated_at'
    public $timestamps = false;

    // Jika nama kolom timestamps berbeda
    // const CREATED_AT = 'tanggal_dibuat';
    // const UPDATED_AT = 'tanggal_diupdate';
}
