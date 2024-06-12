<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebPortalcmsController extends Controller
{
    public function index(){
        return view('pages.webportals-cms');
    }
}
