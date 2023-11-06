<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Course;
use App\Models\Gallery;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as Req;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function welcome(): Response
    {
        $course = Course::latest()->get();
        auth()->user() ? $course = auth()->user()->attachSubscriptionStatus($course) : '' ;

        return Inertia::render('Landing/Welcome', [
            'course' =>  Inertia::lazy(fn () => $course),
            'blog' =>  Inertia::lazy(fn () => Blog::latest()->get()->take(6)),
        ]);
//        return Redirect::route('dashboard');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function course(): Response
    {
        $course = Course::query()->where('status_id', Course::ACTIVE);

//        auth()->user() ? $course = auth()->user()->attachSubscriptionStatus($course) : '' ;

//        dd($course->toArray());
        return Inertia::render('Landing/Course', [
            'course' =>  $course->latest()
                ->when(Req::input('search'), function ($query, $search) {
                    $query->where('name', 'like', '%' . $search . '%');
                })->paginate(8)
                ->withQueryString(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function courseShow(Course $course)
    {
//        $comment = auth()->user()->attachLikeStatus($course->comment);
        $comment = auth()->user()->attachVoteStatus($course->comment);
//        $comment = $comment->toArray();
//        dd($comment);
        if (auth()->user()->hasSubscribed($course) or
            auth()->user()->id == $course->user_id or
            auth()->user()->id == User::ADMIN) {
            return Inertia::render('Landing/CourseShow', [
                'course' => $course,
                'comment' => $comment
            ]);
        } else {
            return Inertia::render('Course/Join', [
                'course' => $course
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function project(): Response
    {
//        dd(Project::latest()->paginate(10)->toArray());
        $project = Project::query()
            ->where('status_id', Project::OPEN);

        return Inertia::render('Landing/Project', [
            'project' =>  $project->latest()
                ->when(Req::input('search'), function ($query, $search) {
                    $query->where('name', 'like', '%' . $search . '%');
                })->paginate(8)
                ->withQueryString(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function projectShow(Project $project)
    {
        return Inertia::render('Landing/ProjectShow', [
            'project' => $project,
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function blog(): Response
    {
        return Inertia::render('Landing/Blog', [
            'blog' =>  Inertia::lazy(fn () => Blog::latest()->get()),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function blogShow(Blog $blog)
    {
//        dd(auth()->user()->attachVoteStatus($blog->comment));
        return Inertia::render('Landing/BlogShow', [
            'blog' => $blog,
            'comment' => auth()->user()->attachVoteStatus($blog->comment)
        ]);
    }
}
