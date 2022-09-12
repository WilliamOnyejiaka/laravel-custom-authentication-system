<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{

    public function __construct()
    {
        $this->middleware('loggedOut');
    }

    public function homePage(Request $request){
        $userId = Session::get("userId");
        if(!$userId){
            dd("error");
            return;
        }

        $user = User::where('id',$userId)->first();
        return view('pages.home',[
            'user' => $user,
        ]);
    }
}
