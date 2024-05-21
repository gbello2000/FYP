<?php 

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function store(Request $request)
    {
        $project = Project::create($request->all());
        return response()->json($project, 201);
    }

    public function approve($id)
    {
        $project = Project::findOrFail($id);
        $project->status = 'approved';
        $project->save();

        return response()->json(['message' => 'Project approved successfully']);
    }

    public function decline($id)
    {
        $project = Project::findOrFail($id);
        $project->status = 'declined';
        $project->save();

        return response()->json(['message' => 'Project declined successfully']);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully']);
    }

    public function getApprovedProjects()
    {
        $projects = Project::where('status', 'approved')->get();
        return response()->json($projects);
    }

    public function updateProjectTime(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->start_time = $request->start_time;
        $project->end_time = $request->end_time;
        $project->save();

        return response()->json(['message' => 'Project time updated successfully']);
    }
}
