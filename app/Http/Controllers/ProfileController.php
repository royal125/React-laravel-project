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

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */



public function Contact(){
    return Inertia::render('Contact');
}
public function Cart(){
    return Inertia::render('cart');
}
public function Payment(){
    return Inertia::render('payment');
}
public function Login(){
    return Inertia::render('login');
}

public function Signup(){
    return Inertia::render('signup');
}
public function Out(){
    return Inertia::render('logout');
}

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
        return Inertia::render('/login')->with('success', 'User registered successfully.');
}

    else{
       
            return Inertia::render('/register')->with('error', 'Something went wrong.');
        
    }

}

public function loginform(Request $request)
{
    $credentials = [
        'email' => $request->email,
        'password' => $request->password
    ];

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();

        // Assuming you have a component named 'Dashboard' to render upon successful login
        return Inertia::render('/');
    }

    // If authentication fails, return an error message as a prop to the Login component
    return Inertia::render('/login', ['error' => 'The provided credentials do not match our records.']);
}

    /**
     * Delete the user's account.
     */
   
     public function logout(Request $request)
     {
       Auth::guard('web')->logout();

       $request->session()->invalidate();
       $request->session()->regenerateToken();
     
        return Inertia::render('/login');
     }
}
