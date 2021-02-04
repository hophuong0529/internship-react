<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

class HomeController extends Controller
{
    public function productLatest()
    {
        $products = Product::with('images')->orderBy('created_at', 'desc')->limit(4)->get();
        return $products->toJson();
    }

    public function productTop()
    {
        $products = Product::with('images')->where('is_top', 1)->limit(4)->get();
        return $products->toJson();
    }

    public function categories()
    {
        $categories = Category::all();
        return $categories->toJson();
    }

}
