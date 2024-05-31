<?php

namespace Tests\Feature;

use App\Models\Attendee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttendeeApiTest extends TestCase
{
    use RefreshDatabase;

    public function it_can_create_an_attendee()
    {
        $data = [
            'name' => 'John Doe',
            'date_of_attendance' => '2024-06-01',
        ];

        $response = $this->postJson('/api/attendees', $data);

        $response->assertStatus(201)
                 ->assertJson([
                     'message' => 'Attendee registered successfully',
                     'attendee' => [
                         'name' => 'John Doe',
                         'date_of_attendance' => '2024-06-01',
                     ]
                 ]);

        $this->assertDatabaseHas('attendees', $data);
    }

    public function it_can_retrieve_all_attendees()
    {
        Attendee::factory()->count(3)->create();

        $response = $this->getJson('/api/attendees');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    public function it_can_delete_an_attendee()
    {
        $attendee = Attendee::factory()->create();

        $response = $this->deleteJson('/api/attendees/' . $attendee->id);

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Attendee deleted successfully']);

        $this->assertDatabaseMissing('attendees', ['id' => $attendee->id]);
    }
}
