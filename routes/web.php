<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about-ots', function () {
    return view('pages.about-ots');
});

Route::get('/team', function () {
    return view('pages.team');
});

Route::get('/why-us', function () {
    return view('pages.why-us');
});

Route::get('/careers', function () {
    return view('pages.careers');
});

Route::get('/prototypes', function () {
    return view('pages.prototypes');
});

Route::get('/web&softwaredeve', function () {
    return view('pages.web&softwaredeve');
});

Route::get('/customwebsitedevelopment', function () {
    return view('pages.custom-website-development');
});

Route::get('/webportals-cms', function () {
    return view('pages.webportals-cms');
});

Route::get('/android-app-development', function () {
    return view('pages.android-app-development');
});

Route::get('/apple-watch-app-development',function(){
    return view('pages.apple-watch-app-development');
});

Route::get('/artificial-intelligence-and-machine-learning',function(){
    return view('pages.artificial-intelligence-and-machine-learning');
});

Route::get('/augmented-reality',function(){
    return view('pages.augmented-reality');
});

Route::get('/blockchain',function(){
    return view('pages.Block Chain Development');
});

Route::get('/cloud-solutions',function(){
    return view('pages.cloud-solutions');
});

Route::get('/contact-us',function(){
    return view('pages.contact-us');
});

Route::get('/custom-crm-software-development',function(){
    return view('pages.custom-crm-software-development');
});

Route::get('/custom-software-development',function(){
    return view('pages.custom-software-development');
});

Route::get('/database-development',function(){
    return view('pages.database-development');
});

Route::get('/digital-marketing-services',function(){
    return view('pages.digital-marketing-services');
});

Route::get('/document-management-services',function(){
    return view('pages.document-management-services');
});

Route::get('/ecommerce-development',function(){
    return view('pages.ecommerce-development');
});

Route::get('/erp-development',function(){
    return view('pages.erp-development');
});

Route::get('/graphic-designing',function(){
    return view('pages.graphic-designing');
});

Route::get('/hire-android-app-developer',function(){
    return view('pages.hire-android-app-developer');
});

Route::get('/hire-app-designer',function(){
    return view('pages.hire-app-designer');
});

Route::get('/hire-dedicated-resource',function(){
    return view('pages.hire-dedicated-resource');
});
