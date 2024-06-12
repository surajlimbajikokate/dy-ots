<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErpDevelopmentController extends Controller
{
    public function index(){
        return view('pages.erp-development');
    }
}
