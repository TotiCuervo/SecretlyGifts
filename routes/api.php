<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//events
Route::post('/event/store', 'EventController@store');
Route::post('/event/{event}/drawNames', 'EventController@drawNames');

//participants
Route::post('/participant/massStore', 'ParticipantController@massStore');

