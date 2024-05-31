<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DataFlowTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_updates_project_status_correctly()
    {
        $student = User::factory()->create(['role' => 'student']);
        $admin = User::factory()->create(['role' => 'admin']);
        $reviewer = User::factory()->create(['role' => 'reviewer']);

        // Student submits a project
        $this->actingAs($student)->post('/api/projects', [
            'student_name' => 'John Doe',
            'project_name' => 'AI Research',
            'preferred_date_of_presenting' => '2024-06-01',
        ]);

        $project = Project::first();
        $this->assertEquals('submitted', $project->status);

        // Admin approves the project
        $this->actingAs($admin)->patch("/api/projects/{$project->id}/approve");
        $project->refresh();
        $this->assertEquals('approved', $project->status);

        // Reviewer reviews the project
        $this->actingAs($reviewer)->post("/api/review/project/{$project->id}", [
            'comments' => 'Good work',
            'rating' => 5,
        ]);

        $project->refresh();
        $this->assertEquals('reviewed', $project->status);
    }
}
