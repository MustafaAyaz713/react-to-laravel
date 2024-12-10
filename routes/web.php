<?php

// web.php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// React uygulaması için wildcard route
Route::get('/login', [AuthController::class, 'showLoginForm']);
Route::get('/register', [AuthController::class, 'showRegisterForm']);

// Wildcard Route
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
