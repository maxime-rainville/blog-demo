<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;

class PostCollection extends Collection
{

    public function blogSummaries() {
        return $this->map(function($post) {
            return [
                '_id' => $post->_id,
                'summary' => $post->summary,
                'title' => $post->title,
                'author' => $post->author,
                'created_at' => $post->created_at->__toString(),
            ];
        });
    }

}
