<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    // These are the mass assignable attributes
    protected $fillable = [
        'user',
        'message',
        'avatar',
        'parent_id'
    ];

    // Returns the level of the comment
    public function getLevelAttribute()
    {
        if ($this->parent_id == null) {
            return 1;
        }
        if ($this->parent->parent_id == null) {
            return 2;
        }
        return 3;
    }

    // Returns the child comments
    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id', 'id');
    }

    // Returns the parent comment
    public function parent()
    {
        return $this->belongsTo(Comment::class, 'parent_id', 'id');
    }
}
