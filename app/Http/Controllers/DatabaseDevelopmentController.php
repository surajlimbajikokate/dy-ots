<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DatabaseDevelopmentController extends Controller
{
    public function index(){
        return view('pages.database-development');
    }
}
