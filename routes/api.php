<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('latest-product', [HomeController::class, 'productLatest']);

Route::get('top-product', [HomeController::class, 'productTop']);

Route::get('products', [HomeController::class, 'allProduct']);

Route::get('search/{keyword}', [HomeController::class, 'search']);

Route::get('related-product/{name}', [HomeController::class, 'productRelated']);

Route::get('categories', [HomeController::class, 'categories']);

Route::get('product/{name}', [HomeController::class, 'detailProduct']);

Route::get('category/{name}', [HomeController::class, 'categoryProduct']);

Route::post('login', [HomeController::class, 'login']);
