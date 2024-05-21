<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Fruitcake\Cors\HandleCors;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AttendeeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\SponsorController;


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
Route::patch('/projects/{id}/decline', [ProjectController::class, 'decline']);
Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);
Route::get('/attendees', [AttendeeController::class, 'index']);
Route::post('/attendees', [AttendeeController::class, 'store']);
Route::delete('/attendees/{id}', [AttendeeController::class, 'destroy']);
Route::get('/reviewers', [UserController::class, 'reviewers']);
Route::delete('/reviewers/{id}', [UserController::class, 'destroy']);
Route::post('/volunteers', [VolunteerController::class, 'store']);
Route::get('/volunteers', [VolunteerController::class, 'index']);
Route::delete('/volunteers/{id}', [VolunteerController::class, 'destroy']);
Route::get('/sponsors', [SponsorController::class, 'index']);
Route::get('/projects/approved', [ProjectController::class, 'getApprovedProjects']);
Route::patch('/projects/{id}/time', [ProjectController::class, 'updateProjectTime']);
//Route::post('/auth/signup', [AuthController::class, 'signup'])->middleware('cors');
//Route::post('/auth/signin', [AuthController::class, 'signin'])->middleware('cors');
//Route::get('/session-data', [SessionController::class, 'getSessionData']);



