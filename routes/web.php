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

Route::get('/why-us', function () {
    return view('pages.why-us');
});

Route::get('/careers', function () {
    return view('pages.careers');
});

Route::get('/prototypes', function () {
    return view('pages.prototypes');
});
