<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Project;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'student_name' => 'required|string|max:255',
            'project_name' => 'required|string|max:255',
            'preferred_date_of_presenting' => 'required|date',
            'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf'
        ]);

        $filePath = null;
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('public/files');
        }

        $project = new Project();
        $project->student_name = $request->input('student_name');
        $project->project_name = $request->input('project_name');
        $project->preferred_date_of_presenting = $request->input('preferred_date_of_presenting');
        $project->file = $filePath;
        $project->save();

        return response()->json(['message' => 'Project saved successfully', 'id' => $project->id], 201);
    }

    public function index()
{
    return Project::all();
}

public function approve($id)
{
    $project = Project::findOrFail($id);
    $project->status = 'approved'; // Assuming you have a status column
    $project->save();

    return response()->json(['message' => 'Project approved successfully']);
}

public function destroy($id)
{
    $project = Project::findOrFail($id);
    $project->delete();

    return response()->json(['message' => 'Project deleted successfully']);
}
}
