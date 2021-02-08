<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Str;

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

    public function productRelated($slug)
    {
        $names = Product::pluck('id', 'name');
        foreach ($names as $name => $id)
            if (Str::slug($name) == $slug) {
                $product_id = $id;
            }
        $product = Product::find($product_id);
        $products = Product::with('images')->where('category_id', $product->category_id)->limit(4)->get();
        return $products->toJson();
    }

    public function categories()
    {
        $categories = Category::all();
        return $categories->toJson();
    }

    public function detailProduct($slug)
    {
        $names = Product::pluck('id', 'name');
        foreach ($names as $name => $id)
            if (Str::slug($name) == $slug) {
                $product_id = $id;
            }
        $product = Product::with('images')->find($product_id);
        return $product->toJson();
    }

}
