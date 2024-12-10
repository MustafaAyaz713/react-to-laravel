<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Genel (auth gerektirmeyen) API işlemleri
Route::post('/login', [AuthController::class, 'login']); // Kullanıcı girişi
Route::post('/register', [AuthController::class, 'register']); // Kullanıcı kaydı

// Doğrulama gerektiren (auth:sanctum) API işlemleri
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']); // Kullanıcı bilgisi
    Route::post('/logout', [AuthController::class, 'logout']); // Kullanıcı çıkışı
});
