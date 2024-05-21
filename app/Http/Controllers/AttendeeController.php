<?php 


namespace App\Http\Controllers;

use App\Models\Attendee;
use Illuminate\Http\Request;

class AttendeeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'date_of_attendance' => 'required|date',
        ]);

        $attendee = Attendee::create($request->all());

        return response()->json(['message' => 'Attendee registered successfully', 'attendee' => $attendee], 201);
    }

    public function index(){
        $attendees = Attendee::all();
        return response()->json($attendees);
    }

    public function destroy($id)
    {
        $attendee = Attendee::findOrFail($id);
        $attendee->delete();

        return response()->json(['message' => 'Attendee deleted successfully']);
    }
}
