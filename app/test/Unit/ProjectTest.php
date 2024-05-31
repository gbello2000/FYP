<?php

namespace Tests\Unit;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;

    public function it_has_a_status()
    {
        $project = Project::create([
            'student_name' => 'Alice',
            'project_name' => 'AI Research',
            'preferred_date_of_presenting' => '2024-06-15',
            'file' => 'ai_research.pdf',
            'status' => 'pending',
        ]);

        $this->assertEquals('pending', $project->status);
    }

    
    public function it_has_a_file()
    {
        $project = Project::create([
            'student_name' => 'Bob',
            'project_name' => 'Blockchain Development',
            'preferred_date_of_presenting' => '2024-06-20',
            'file' => 'blockchain_dev.pdf',
            'status' => 'approved',
        ]);

        $this->assertEquals('blockchain_dev.pdf', $project->file);
    }
}
