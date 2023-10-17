<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Apicontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login',[Apicontroller::class,'loginform']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

   
    Route::middleware('auth:api')->group(function () {
        Route::get('/logout',[ProfileController::class,'Out']);
        Route::post('/logout',[ProfileController::class,'Logoff']);
    });

Route::post('/signup',[Apicontroller::class,'Registerform']);
Route::get('/login',[Apicontroller::class,'Login']);
Route::post('/logout',[Apicontroller::class,'logout']);


