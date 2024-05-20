<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Fruitcake\Cors\HandleCors;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\ProjectController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/projects', [ProjectController::class, 'store']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::patch('/projects/{id}/approve', [ProjectController::class, 'approve']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

//Route::post('/auth/signup', [AuthController::class, 'signup'])->middleware('cors');
//Route::post('/auth/signin', [AuthController::class, 'signin'])->middleware('cors');
//Route::get('/session-data', [SessionController::class, 'getSessionData']);



