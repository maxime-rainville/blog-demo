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

    /**
     * Compute a summary of the post by stripping out all tags and getting the 10 words.
     * @return [type] [description]
     */
    public function getSummaryAttribute() {
        $summary = strip_tags($this->content);

        $limit = 10;

        if (str_word_count($summary, 0) > $limit) {
              $words = str_word_count($summary, 2);
              $pos = array_keys($words);
              $summary = substr($summary, 0, $pos[$limit]) . '...';
        }

      return $summary;
    }

    public function newCollection(array $models = [])
    {
        return new PostCollection($models);
    }
}
