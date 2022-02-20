<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Comment;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Tests if the level accessor is working as intended.
     *
     * @return void
     */
    public function test_level()
    {
        $parent = Comment::factory()->createOne();
        $this->assertEquals(1, $parent->level);

        $reply = $parent->replies()->create([
            'user' => 'John',
            'avatar' => '/avatar5.jpeg',
            'message' => 'lorem ipsum set amet dolor'
        ]);
        $this->assertEquals(2, $reply->level);

        $reply2 = $reply->replies()->create([
            'user' => 'Jane',
            'avatar' => '/avatar5.jpeg',
            'message' => 'lorem ipsum set amet dolor'
        ]);
        $this->assertEquals(3, $reply2->level);
    }

    /**
     * Tests if the relationship between parent comment and
     * replies is correct.
     *
     * @return void
     */
    public function test_parent_accessor()
    {
        $parent = Comment::factory()->createOne();
        $child = Comment::factory()->createOne();

        $child->parent()->associate($parent);

        $this->assertTrue($child->parent_id == $parent->id);
    }

    /**
     * Tests if the relationship between parent comment and
     * replies is correct.
     *
     * @return void
     */
    public function test_replies_accessor()
    {
        $parent = Comment::factory()->createOne();
        $parent->replies()->createMany([
            ['user' => 'John', 'message' => 'lorem ipsum set amet dolor'],
            ['user' => 'Doe', 'message' => 'The quick brown fox'],
        ]);

        $this->assertTrue(count($parent->replies) == 2);
    }
}
