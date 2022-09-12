<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Models\User;

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

Route::get('/', fn() => redirect(route("authPage")));
Route::get('/home',[HomeController::class,'homePage'])->name("home");
Route::get('/authentication',[AuthController::class, 'authenticationPage'])->name("authPage");

Route::get('/test',function () {
    return view('pages.test');
});

Route::post('/sign-up',[AuthController::class, 'signUpAuthentication'])->name('signUp');
Route::post('/login', [AuthController::class, 'loginAuthentication'])->name("login");
Route::get('/logOut', [AuthController::class, 'logOut'])->name("logOut");


