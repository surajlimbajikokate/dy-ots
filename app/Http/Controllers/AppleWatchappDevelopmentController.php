<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppleWatchappDevelopmentController extends Controller
{
    public function index(){
        return view('pages.apple-watch-app-development');
    }
}
