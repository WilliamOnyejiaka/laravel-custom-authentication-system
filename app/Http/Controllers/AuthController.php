<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Response;

class AuthController extends Controller
{
    

    public function signUpAuthentication(Request $request){
        $body = json_decode($request->getContent());
        return Response::json([
            'data' => $body,
        ]);
    }
}
