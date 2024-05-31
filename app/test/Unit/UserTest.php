<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function it_can_create_a_user()
    {
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'role' => 'admin',
        ]);

        $this->assertInstanceOf(User::class, $user);
        $this->assertDatabaseHas('users', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'role' => 'admin',
        ]);
    }

    public function it_has_a_role()
    {
        $user = User::create([
            'name' => 'Alice',
            'email' => 'alice@example.com',
            'password' => 'password123',
            'role' => 'user',
        ]);

        $this->assertEquals('user', $user->role);
    }

    public function it_has_a_hashed_password()
    {
        $user = User::create([
            'name' => 'Bob',
            'email' => 'bob@example.com',
            'password' => 'password123',
            'role' => 'editor',
        ]);

        $this->assertNotEquals('password123', $user->password);
        $this->assertTrue(Hash::check('password123', $user->password));
    }
}
