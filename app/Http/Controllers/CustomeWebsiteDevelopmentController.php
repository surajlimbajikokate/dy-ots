<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomeWebsiteDevelopmentController extends Controller
{
    public function index(){
        return view('pages.custom-website-development');
    }
}
