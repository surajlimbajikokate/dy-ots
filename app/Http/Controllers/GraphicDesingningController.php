<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GraphicDesingningController extends Controller
{
    public function index(){
        return view('pages.graphic-designing');
    }
}
