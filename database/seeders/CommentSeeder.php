<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 10 records of customers
        Comment::factory(2)->create()->each(function ($comment) {
            // Randomize the number of sub comments
            $subCount = random_int(1, 2);
            // Seed the relation with one address
            $subComments = Comment::factory($subCount)->make([
                'parent_id' => $comment
            ]);

            foreach ($subComments as $sc) {
                $comment->replies()->save($sc);
            }
        });
    }
}
