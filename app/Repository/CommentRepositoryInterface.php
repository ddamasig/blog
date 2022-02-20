<?php
namespace App\Repository;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface CommentRepositoryInterface
{
    public function paginate(int $limit): LengthAwarePaginator;
}
