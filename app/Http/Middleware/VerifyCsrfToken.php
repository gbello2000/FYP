<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
use Illuminate\Support\Facades\Log;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        
        'web/auth/signin',
        'web/auth/signup',
        //
    ];

    protected function shouldRegenerateToken($request)
{
    Log::info('shouldRegenerateToken called');
    return false; // This line is blocking token to refresh
}
}
