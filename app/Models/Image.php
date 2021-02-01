<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Image extends Model
{
    protected $table = 'images';

    public function product()
    {
        return $this->belongTo(Product::class, 'product_id', 'id');
    }

    public $timestamps = false;
}
