<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EcommerceDevelopmentController extends Controller
{
    public function index(){
        return view('pages.ecommerce-development');
    }
}
