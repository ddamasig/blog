<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $randomInteger = random_int(1,4);
        return [
            'user' => $this->faker->name(),
            'avatar' => "/avatar$randomInteger.jpeg",
            'message' => $this->faker->sentences(random_int(1, 4), true)
        ];
    }
}
