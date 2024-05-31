<?php

namespace Tests\Unit;

use App\Models\Attendee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttendeeTest extends TestCase
{
    use RefreshDatabase;

    public function it_creates_an_attendee()
    {
        $attendee = Attendee::create([
            'name' => 'Jani Bello',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertDatabaseHas('attendees', [
            'name' => 'Jani Bello',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertInstanceOf(Attendee::class, $attendee);
        $this->assertEquals('Jani Bello', $attendee->name);
        $this->assertEquals('2024-05-31', $attendee->date_of_attendance);
    }

    public function it_has_a_name()
    {
        $attendee = Attendee::create([
            'name' => 'Jani Bello',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertEquals('Jani Bello', $attendee->name);
    }

    public function it_has_a_date_of_attendance()
    {
        $attendee = Attendee::create([
            'name' => 'Jani Bello',
            'date_of_attendance' => '2024-05-31',
        ]);

        $this->assertEquals('2024-05-31', $attendee->date_of_attendance);
    }
}

