<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AndroidAppDevelopmentController extends Controller
{
    public function index(){
        return view('pages.android-app-development');
    }
}
