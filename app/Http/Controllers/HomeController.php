<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function allProduct()
    {
        $products = Product::with('images')->get();
        return $products->toJson();
    }

    public function productLatest()
    {
        $products = Product::with('images')->orderBy('created_at', 'desc')->limit(8)->get();
        return $products->toJson();
    }

    public function productTop()
    {
        $products = Product::with('images')->where('is_top', 1)->get();
        return $products->toJson();
    }

    public function productSale()
    {
        $products = Product::with('images')->where('on_sale', 1)->get();
        return $products->toJson();
    }

    public function productRelated($slug)
    {
        $names = Product::pluck('id', 'name');
        foreach ($names as $name => $id) {
            if (Str::slug($name) == $slug) {
                $product_id = $id;

                $product = Product::find($product_id);
                $products = Product::with('images')->where('category_id', $product->category_id)->limit(4)->get();
                return $products->toJson();
            }
        }
    }

    public function categories()
    {
        $categories = Category::all();
        return $categories->toJson();
    }

    public function detailProduct($slug)
    {
        $names = Product::pluck('id', 'name');
        foreach ($names as $name => $id) {
            if (Str::slug($name) == $slug) {
                $product_id = $id;

                $product = Product::with('images')->find($product_id);
                return $product->toJson();
            }
        }
    }

    public function login(Request $request)
    {
        $account = Account::where('username', $request->input('username'))->first();
        if ($account && Hash::check($request->input('password'), $account->password)) {
            return response()->json($account);
        } else {
            return response()->json([
                'error' => 'Tên đăng nhập hoặc mật khẩu không chính xác.'
            ], 422);
        }
    }

    public function search($keyword)
    {
        $products = Product::with('images')->where('name', 'like', '%' . $keyword . '%')->get();
        return $products->toJson();
    }

    public function categoryProduct($slug)
    {
        $names = Category::pluck('id', 'name');
        foreach ($names as $name => $id) {
            if (Str::slug($name) == $slug) {
                $category_id = $id;

                $category = Category::find($category_id);
                $products = Product::with('images')->where('category_id', $category_id)->get();
                return response()->json([
                    'products' => $products,
                    'category' => $category
                ]);
            }
        }
    }
}
