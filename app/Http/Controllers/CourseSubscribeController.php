<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\CourseSubscribe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CourseSubscribeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
//        dd(CourseSubscribe::latest()->get());
        return Inertia::render('CourseSubscribe/Index', [
            'subscribe' => CourseSubscribe::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->toArray(), [
            'course_id' => ['required'],
            'photo' => ['required']
        ])->validateWithBag('storeInformation');

        if (CourseSubscribe::where('course_id', $request['course_id'])->where('user_id', auth()->user()->id)->first()) {
            session()->flash('flash.banner', 'sabar ya kk, sedang di proses!');
        } else {
            $request['user_id'] = auth()->user()->id;
            $request['status_id'] = CourseSubscribe::REQUEST;

            $sub = CourseSubscribe::create($request->all());
            $sub->addMedia($request['photo'])->toMediaCollection();

            session()->flash('flash.banner', 'sabar ya kk, sedang di proses!');
        }


//        return Redirect::route('courseCategory.index', []);
    }

    /**
     * Display the specified resource.
     */
    public function show(CourseSubscribe $courseSubscribe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseSubscribe $courseSubscribe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CourseSubscribe $courseSubscribe)
    {
//        dd($request->all(), $courseSubscribe);
        $user = User::where('id', $courseSubscribe['user_id'])->first();
        $course = Course::where('id', $courseSubscribe['course_id'])->first();

        if ($request['status_id'] == true) {
            $user->subscribe($course);
            $courseSubscribe->update(['status_id' => CourseSubscribe::ACCEPT]);
        } else {
            $courseSubscribe->update(['status_id' => CourseSubscribe::REJECT]);
            $user->unsubscribe($course);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseSubscribe $courseSubscribe)
    {
        //
    }
}