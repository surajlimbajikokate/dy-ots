<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomCrmSoftwareDevelopmentController extends Controller
{
    public function index(){
        return view('pages.custom-crm-software-development');
    }
}
