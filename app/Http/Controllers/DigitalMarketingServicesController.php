<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DigitalMarketingServicesController extends Controller
{
    public function index(){
        return view('pages.digital-marketing-services');
    }
}
