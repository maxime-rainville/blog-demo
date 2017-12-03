<?php
namespace App\Service;

use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Authenticatable;
use Auth0\SDK\JWTVerifier;
use \Illuminate\Http\Request;

class JwtGuard implements Guard
{
    private $verifier;

    public function __construct($var)
    {
        $this->verifier = new JWTVerifier([
            'supported_algs' => ['RS256'],
            'valid_audiences' => [env('AUTH0_CLIENT_ID')],
            'authorized_iss' => ["https://" . env('AUTH0_DOMAIN') . "/"]
        ]);
    }

    public function check()
    {
        if ($this->user()) {
            return true;
        } else {
            return false;
        }
    }

    public function guest()
    {
    }

    public function user()
    {
        $token = request()->header('authorization');
        $token = str_ireplace('Bearer ', '', $token);

        return $this->verifier->verifyAndDecode($token);
    }

    public function id()
    {
    }

    public function validate(array $credentials = [])
    {
        return false;
    }

    public function setUser(Authenticatable $user, $remember = false)
    {
        return;
    }
}
