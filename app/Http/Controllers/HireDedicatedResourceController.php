<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HireDedicatedResourceController extends Controller
{
    public function index(){
        return view('pages.hire-dedicated-resource');
    }
}
