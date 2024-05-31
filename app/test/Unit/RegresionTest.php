<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegressionTest extends TestCase
{
    use RefreshDatabase;

    public function it_can_submit_approve_and_review_a_project()
    {
        $student = User::factory()->create(['role' => 'student']);
        $admin = User::factory()->create(['role' => 'admin']);
        $reviewer = User::factory()->create(['role' => 'reviewer']);

        
        $response = $this->actingAs($student)->post('/api/projects', [
            'student_name' => 'John Doe',
            'project_name' => 'AI Research',
            'preferred_date_of_presenting' => '2024-06-01',
        ]);

        $response->assertStatus(201);
        $project = Project::first();
        $this->assertEquals('submitted', $project->status);

        $response = $this->actingAs($admin)->patch("/api/projects/{$project->id}/approve");
        $response->assertStatus(200);
        $project->refresh();
        $this->assertEquals('approved', $project->status);

     
        $response = $this->actingAs($reviewer)->post("/api/review/project/{$project->id}", [
            'comments' => 'Good work',
            'rating' => 5,
        ]);

        $response->assertStatus(200);
        $project->refresh();
        $this->assertEquals('reviewed', $project->status);
    }
}
