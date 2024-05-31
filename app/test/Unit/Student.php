<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserRoleTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function student_cannot_access_admin_dashboard()
    {
        $student = User::factory()->create(['role' => 'student']);

        $response = $this->actingAs($student)->get('/admin/dashboard');

        $response->assertStatus(403);
    }

    /** @test */
    public function admin_can_access_admin_dashboard()
    {
        $admin = User::factory()->create(['role' => 'admin']);

        $response = $this->actingAs($admin)->get('/admin/dashboard');

        $response->assertStatus(200);
    }

    /** @test */
    public function reviewer_can_access_review_page()
    {
        $reviewer = User::factory()->create(['role' => 'reviewer']);

        $response = $this->actingAs($reviewer)->get('/review/project/1');

        $response->assertStatus(200);
    }
}
