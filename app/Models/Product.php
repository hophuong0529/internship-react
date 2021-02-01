<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function images()
    {
        return $this->hasMany(Image::class, 'product_id', 'id');
    }

    protected $fillable = [
        'code',
        'name',
        'price',
        'quantity',
        'description',
        'category_id',
        'is_top',
        'on_sale',
        'created_at',
        'updated_at',
    ];

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public $timestamps = false;
}
