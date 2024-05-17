<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    // app/Http/Controllers/AuthController.php

public function signup(Request $request)
{
    
    $validatedData = $request->validate([
        'username' => 'required|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed|min:6',
        'role' => 'required'
    ]);
    Log::info('Raw password before hashing: ' . $validatedData['password']);
    $user = User::create([
        
        'name' => $validatedData['username'],
        'email' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
        
        'role' => $validatedData['role']
    ]);
    

    
    return response()->json(['user' => $user], 201)->header('Access-Control-Allow-Origin', '*');
}

public function signin(Request $request)
{

    
    Log::info('Attempting to sign in', $request->all());
    $user = User::where('email', $request->email)->first(); 
    
    
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    if (Hash::check($request->password, $user->password)) {
        
        
        Log::info('Before setting session CHEKING: ', $request->session()->all());
        $request->session()->put('user',$user->name);
        $request->session()->put('role',$user->role);
        $request->session()->put('email',$user->email);
        Log::info('After setting session: CHEKING ', $request->session()->all());
        $request->session()->save();
        Log::info('SAVING CSRF TOKEN');
        //$request->session()->put('role',$user->role);
        //Log::info('Username: ' . $user->name);
        //Log::info('Added in session user: ' . session('user'));
        //Log::info('Added in session role: ' . session('role'));
        return response()->json(['message' => 'Login successful','role' => $user->role], 200);
    } else {
        
        
        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    

}

public function logout(Request $request)
{


    session()->flush(); 
    return redirect('/')->with('status', 'Podaci su uspešno ažurirani!');
}



}
