<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function reviewers()
    {
        $reviewers = User::where('role', 'reviewer')->get();
        return response()->json($reviewers);
    }

    public function destroy($id)
    {
        $reviewer = User::findOrFail($id);
        if ($reviewer->role === 'reviewer') {
            $reviewer->delete();
            return response()->json(['message' => 'Reviewer deleted successfully']);
        }
        return response()->json(['message' => 'User not found or not a reviewer'], 404);
    }
}
