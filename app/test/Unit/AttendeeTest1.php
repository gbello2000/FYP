<?php

namespace Tests\Unit;

use App\Models\Attendee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttendeeTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_an_attendee()
    {
        $attendee = Attendee::create([
            'name' => 'John Doe',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertDatabaseHas('attendees', [
            'name' => 'John Doe',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertInstanceOf(Attendee::class, $attendee);
        $this->assertEquals('John Doe', $attendee->name);
        $this->assertEquals('2024-05-31', $attendee->date_of_attendance);
    }
}
