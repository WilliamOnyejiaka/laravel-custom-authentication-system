<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;
use PhpParser\Builder\Function_;

use function App\Modules\responseErrorMessage as responseErrorMessage;

class AuthController extends Controller
{

    public function authenticationPage(Request $request){
        Session::put('title',"Authentication");
        return view('pages.auth-page');
    }

    public function signUpAuthentication(Request $request)
    {
        $body = json_decode($request->getContent());
        $name = $body->name ?? false;
        $email = $body->email ?? false;
        $password = $body->password ?? false;

        if (!$name) {
            return Response::json(responseErrorMessage("name required"), 400);
        }
        if (!$email) {
            return Response::json(responseErrorMessage("email required"), 400);
        }
        if (!$password) {
            return Response::json(responseErrorMessage("password required"), 400);
        }

        $userExits = User::where('email',$email)->first();
        if($userExits){
            return Response::json(responseErrorMessage("email exists"), 400);
        }

        $createdUser = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        if($createdUser){
            return Response::json([
                'error' => false,
                'message' => "user created",
            ],200);
        }

        return Response::json(responseErrorMessage("something went wrong"),500);
    }

    public function loginAuthentication(Request $request){
        $body = json_decode($request->getContent());
        $email = $body->email ?? false;
        $password = $body->password ?? false;

        if(!$email){
            return Response::json(responseErrorMessage("email missing"),400);
        }
        if (!$password) {
            return Response::json(responseErrorMessage("password missing"), 400);
        }

        $user = User::where('email',$email)->first();
        if($user){
            if(Hash::check($password,$user->password)){
                Session::put("userId",$user->id);
                return Response::json([
                    'error' => false,
                    'message' => "logged in",
                ],200);
            }
            return Response::json([
                'error' => true,
                'message' => "invalid credentials",
            ],400);
        }
        return Response::json(responseErrorMessage("email does not exist"),400);
    }

    public function logOut(Request $request){
        if(Session::has("userId")){
            Session::pull("userId");
            return redirect("authentication");
        }
    }
}
