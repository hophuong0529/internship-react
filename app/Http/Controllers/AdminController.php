<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Product\ProductRepository;
use Carbon\Carbon;
use App\Models\Image;

class AdminController extends Controller
{
    protected $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function storeProduct(Request $request)
    {
        $data = $request->all();

        if (!array_key_exists('is_top', $data)) {
            $data['is_top'] = 0;
        }
        if (!array_key_exists('on_sale', $data)) {
            $data['on_sale'] = 0;
        }
        $data['created_at'] = Carbon::now();
        $data['updated_at'] = Carbon::now();

        $product = $this->repository->create($data);

        $images = $request->images;

        foreach ($images as $image) {
            $path = time() . '-' . $image->getClientOriginalName();;
            Image::insert([
                'path' => 'images/' . $path,
                'product_id' => $product->id,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $image->storeAs('public/images', $path);
        }
        return response()->json("Create Success.");
    }

    public function updateProduct($id, Request $request)
    {
        $data = $request->all();

        if (!array_key_exists('is_top', $data)) {
            $data['is_top'] = 0;
        }
        if (!array_key_exists('on_sale', $data)) {
            $data['on_sale'] = 0;
        }
        $data['updated_at'] = Carbon::now();

        $this->repository->edit($data, $id);

        $images = $request->images;

        if ($images) {
            Image::where('product_id', $id)->delete();
            foreach ($images as $image) {
                $path = time() . '-' . $image->getClientOriginalName();;
                Image::insert([
                    'path' => 'images/' . $path,
                    'product_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                $image->storeAs('public/images', $path);
            }
        }

        return response()->json("Edit Success.");
    }

    public function deleteProduct(Request $request)
    {
        $id = $request->productId;
        $this->repository->delete($id);
        Image::where('product_id', $id)->delete();

        return response()->json("Deleted Success.");
    }
}
