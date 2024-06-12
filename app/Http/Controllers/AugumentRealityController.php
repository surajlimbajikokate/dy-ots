<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AugumentRealityController extends Controller
{
    public function index(){
        return view('pages.augmented-reality');
    }
}
