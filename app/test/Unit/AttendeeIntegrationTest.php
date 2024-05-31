<?php

namespace Tests\Feature;

use App\Models\Attendee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttendeeIntegrationTest extends TestCase
{
    use RefreshDatabase;

    public function it_can_create_update_and_delete_an_attendee()
    {
        
        $data = [
            'name' => 'Jane Doe',
            'date_of_attendance' => '2024-07-01',
        ];

        $response = $this->postJson('/api/attendees', $data);

        $response->assertStatus(201)
                 ->assertJson([
                     'message' => 'Attendee registered successfully',
                     'attendee' => [
                         'name' => 'Jane Doe',
                         'date_of_attendance' => '2024-07-01',
                     ]
                 ]);

        $attendeeId = $response->json('attendee.id');

        $this->assertDatabaseHas('attendees', $data);

        
        $updateData = [
            'name' => 'Jane Smith',
            'date_of_attendance' => '2024-07-01',
        ];

        $response = $this->putJson("/api/attendees/{$attendeeId}", $updateData);

        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Attendee updated successfully',
                     'attendee' => [
                         'name' => 'Jane Smith',
                         'date_of_attendance' => '2024-07-01',
                     ]
                 ]);

        $this->assertDatabaseHas('attendees', $updateData);

        
        $response = $this->deleteJson("/api/attendees/{$attendeeId}");

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Attendee deleted successfully']);

        $this->assertDatabaseMissing('attendees', ['id' => $attendeeId]);
    }
}
