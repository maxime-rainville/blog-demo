<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Post extends Eloquent
{

    public function author()
    {
        return $this->belongsTo('User');
    }
}
