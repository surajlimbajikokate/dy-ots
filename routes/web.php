<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about-ots', function () {
    return view('pages.about-ots');
});

Route::get('/team', function () {
    return view('pages.team');
});
