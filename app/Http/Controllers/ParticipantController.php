<?php

namespace App\Http\Controllers;

use App\Participant;
use App\Exclusion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ParticipantController extends Controller
{

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $participant = Participant::create([
            'event_id' => $request->event_id,
            'name' => $request->name,
            'email' => $request->email
        ]);

        if ($request->exclusions) {

            foreach($request->exclusions as $exclusion) {
                $exclusion = Exclusion::create([
                    'participant_id' => $participant->id,
                    'name' => $exclusion
                ]);
            }
        }

        return $participant;
    }

    public function massStore(Request $request) {

        foreach ($request->participants as $participant) {
            $this->store(new Request([
                'name' => $participant['name'],
                'email' => $participant['email'],
                'exclusions' => $participant['exclusions'],
                'event_id' => $request->event_id
            ]));
        }

        return $request;
    }

    public function show(participant $participant)
    {
        //
    }

    public function edit(participant $participant)
    {
        //
    }

    public function update(Request $request, participant $participant)
    {
        //
    }

    public function destroy(participant $participant)
    {
        //
    }
}
