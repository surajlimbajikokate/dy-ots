<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebandSoftwareController extends Controller
{
    public function index(){
        return view('pages.web&softwaredeve');
    }
}
