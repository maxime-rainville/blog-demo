<?php

use Illuminate\Http\Request;
use App\User;
use App\Post;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     $user = $request->user();
//
//     return response()->json($user, 200);
// });

Route::prefix('posts')->group(function () {
    Route::middleware('auth:api')->post('/', function (Request $request) {
        $userData = $request->user();


        $user = User::where('email', $userData->email)->first();
        if (!$user) {
            $user = new User();
        }

        $user->role = $userData->role;
        $user->nickname = $userData->nickname;
        $user->name = $userData->name;
        $user->picture = $userData->picture;
        $user->email = $userData->email;
        $user->sub = $userData->sub;

        $user->save();

        $post = new Post($request->only(['content', 'title']));
        $post->author()->associate($user);
        $post->save();

        return response()->json($post, 201);
    });

    Route::get('/{id}', function ($id) {
        $post = Post::with('author')->get()->find($id);
        return response()->json($post, 200);
    });

    Route::get('/', function (Request $request) {
        $posts = Post::with('author')->orderBy('created_at', 'desc')->get();
        return response()->json($posts->blogSummaries(), 200);
    });
});
