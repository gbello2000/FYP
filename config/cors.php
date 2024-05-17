<?php

return [
    'paths' => ['*', 'sanctum/csrf-cookie','web/*'], // Uverite se da su rute koje koristite uključene
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // Dozvolite vašem frontend domenu pristup
    'allowed_origins_patterns' => ['*'],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['*'],
    'max_age' => 0,
    'supports_credentials' => true, // Ako frontend šalje credentials kao cookies, postavite ovo na true
];

