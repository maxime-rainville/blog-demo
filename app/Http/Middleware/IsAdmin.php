<?php

namespace App\Http\Middleware;

use Closure;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $userData = $request->user();

        if (!$userData) {
            abort(401, 'Unauthorized');
        } else if ($userData->role != 'ADMIN') {
            abort(403, 'Access denied');
        }

        return $next($request);
    }
}
