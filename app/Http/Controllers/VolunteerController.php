<?php

namespace App\Http\Controllers;

use App\Models\Volunteer;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'date' => 'required|date',
        ]);

        $volunteer = Volunteer::create($request->all());

        return response()->json(['message' => 'Volunteer registered successfully', 'volunteer' => $volunteer], 201);
    }

    public function index()
    {
        $volunteers = Volunteer::all();
        return response()->json($volunteers);
    }

    public function destroy($id)
    {
        $volunteer = Volunteer::findOrFail($id);
        $volunteer->delete();
        return response()->json(['message' => 'Volunteer deleted successfully']);
    }
}