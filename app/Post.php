<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Post extends Eloquent
{

    protected $fillable = [
        'title', 'content'
    ];

    public function author()
    {
        return $this->belongsTo('App\\User');
    }
}
