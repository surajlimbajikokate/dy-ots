<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrototypesController extends Controller
{
    public function index(){
        return view('pages.prototypes');
    }
}
