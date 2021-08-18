<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrawlerController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
//Forms

Route::middleware('api')->group(function () {
    Route::resource('crawler', CrawlerController::class);
    Route::get('search={key}', [CrawlerController::class, 'search']);
    Route::get('search={key}&p={current_page}', [CrawlerController::class, 'changePage']);
    Route::post('detailProduct', [CrawlerController::class, 'detailProduct']);
});