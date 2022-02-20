<?php

namespace App\Repository\Eloquent;

use App\Models\Comment;
use App\Repository\CommentRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class CommentRepository extends BaseRepository implements CommentRepositoryInterface
{

    /**
     * CommentRepository constructor.
     *
     * @param Comment $model
     */
    public function __construct(Comment $model)
    {
        parent::__construct($model);
    }

    /**
     * @param int $limit
     *
     * @return Model
     */
    public function paginate(int $limit): LengthAwarePaginator
    {
        return $this->model->with(['replies', 'replies.replies'])
            ->withCount('replies')
            ->where('parent_id', null)
            ->orderBy('created_at', 'desc')
            ->paginate($limit);
    }
}
