<?php
 
namespace Tests\Feature;

use App\Models\Comment;
use Tests\TestCase;

class CommentTest extends TestCase
{
    /**
     * Test the GET /comments api.
     *
     * @return void
     */
    public function test_index()
    {
        Comment::factory(10)->create();

        $response = $this->getJson('/api/comments');

        // Check the structure of the response body
        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data',
                'meta',
                'links',
            ]);

        // Check that the query behavior is correct
        $this->assertTrue(count($response['data']) == 10);
    }

    /**
     * Test the POST /comments api.
     *
     * @return void
     */
    public function test_store()
    {
        // Test 'required' validators
        $response = $this->postJson('/api/comments', [
            'user' => '',
            'message' => ''
        ]);
        $response->assertStatus(422);

        // Test successful creation
        $response = $this->postJson('/api/comments', [
            'user' => 'John Doe',
            'message' => 'Lorem ipsum set amet dolor elicit'
        ]);
        $response
            ->assertStatus(201)
            ->assertJsonStructure([
                'user',
                'message',
                'replies',
                'parent'
            ]);
    }
}