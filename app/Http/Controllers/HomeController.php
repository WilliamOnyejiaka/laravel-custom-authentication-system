<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function homePage(Request $request){
        return view('pages.home');
    }
}
