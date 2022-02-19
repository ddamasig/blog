<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user' => $this->user,
            'message' => $this->message,
            'replies' => CommentResource::collection($this->replies),
            'parent_id' => $this->parent_id,
            'level' => $this->level,
//            'parent' => $this->parent,
            'created_at' => $this->created_at,
        ];
    }
}
