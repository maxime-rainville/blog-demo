<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{id?}', function ($id=null) {
    $auth = [
        'domain' => env('AUTH0_DOMAIN'),
        'clientID' => env('AUTH0_CLIENT_ID'),
        'redirectUri' => env('APP_URL') . '/auth0',
        'audience' => 'https://' . env('AUTH0_DOMAIN') . '/userinfo',
        'responseType' => 'token id_token',
        'scope' => 'openid profile email'
    ];
    // Sharing is caring
    View::share('auth0', json_encode($auth));

    return view('welcome');
});
