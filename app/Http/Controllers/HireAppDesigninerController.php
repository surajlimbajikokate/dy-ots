<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HireAppDesigninerController extends Controller
{
    public function index(){
        return view('pages.hire-app-designer');
    }
}
