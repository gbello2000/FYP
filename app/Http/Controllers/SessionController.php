<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SessionController extends Controller
{
    public function getSessionData(Request $request)
    {
        //$request->session()->regenerate();
        // U
        Log::info('Session controler data: ', $request->session()->all());
        $username = $request->session()->get('user');
        $role = $request->session()->get('role');
        $csrfToken = $request->session()->get('_token');
        $email = $request->session()->get('email');
        Log::info('Loaded user from cookie: ' . $username);
        Log::info('Loaded user from cookie: ' . $role);
        Log::info('Loaded user from cookie: ' . $csrfToken);
        Log::info('Loaded user from cookie: ' . $email);
        
        
        // Returning username as json 
        return response()->json([
            'username' => $username,
            'role' => $role,
            'csrfToken' => $csrfToken,
            'email' => $email
        ]);
    }
}

