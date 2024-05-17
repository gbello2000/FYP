<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

use Fruitcake\Cors\HandleCors;
use Illuminate\Http\Request;
use App\Http\Controllers\SessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/session-data', [SessionController::class, 'getSessionData']);
//Route::post('/register', [AuthController::class, 'register'])->middleware(HandleCors::class);
//Route::post('/auth/signin', [AuthController::class, 'signin'])->middleware('cors');
Route::post('/web/auth/signup', [AuthController::class, 'signup'])->middleware('web');
Route::post('/web/auth/signin', [AuthController::class, 'signin'])->middleware('web');
Route::get('/web/session-data', [SessionController::class, 'getSessionData'])->middleware('web');
Route::post('/web/logout', [AuthController::class, 'logout'])->middleware('web');