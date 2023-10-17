<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class Apicontroller extends Controller
{
    public function Registerform(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required',
        ]);
       
        $existingUser = User::where('email', $request['email'])->first();
        if ($existingUser) {
            return response()->json(['error' => 'Email is already registered.'], 422);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),

                ]);
        if($user){
            return response()->json([
                'success' => true,
                'statuscode' => 200,
                'status' => 'success',
                'user' => $user,
                'token' => $user->createToken('Api Token')->plainTextToken
            ]);
            return Inertia::render('/login');
        }
        return response()->json(['error' => 'The provided credentials do not match our records.'], 401);


        }


    public function loginform(Request $request)
    {
        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
    
            return response()->json([
                'success' => true,
                'status' => 'success',
                'user'=>$credentials
            ]);
            return Inertia::render('/');
        }
    
        return response()->json(['error' => 'The provided credentials do not match our records.'], 401);
    }



    public function register()
    {
        return Inertia::render('signup');
    }


    
    public function logout(Request $request)
     {
       Auth::guard('web')->logout();

       $request->session()->invalidate();
       $request->session()->regenerateToken();
     
        return response()->json(['Success' => 'Logged out']);
        return Inertia::render('/login');
     
     }
    
}
