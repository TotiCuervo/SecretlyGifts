<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class EventController extends Controller
{

    public function index()
    {
        //
    }

    public function create()
    {

    }

    public function store(Request $request)
    {

        $event = Event::create([
            'name' => $request->name,
            'currency' => $request->currency,
            'giftLimit' => $request->giftLimit,
            'date' => $request->date,
            'message' => $request->message
        ]);

        return $event;
    }

    public function show(Event $event)
    {
        //
    }

    public function edit(Event $event)
    {
        //
    }

    public function update(Request $request, Event $event)
    {
        //
    }

    public function destroy(Event $event)
    {
        //
    }

//---------------------------------------------

    public function drawNames(Event $event) {

        //get the participants
        $participants = $event->participants()->get();

        //sets them to the availablePeople
        $availablePeople = $participants;

        //loops through the participants
        foreach ($participants as $participant) {

            //draws the name for the participant and sets it in the called method
            $draw = $participant->drawName($availablePeople);

            //if the draw was unsuccessful start draw over
            if (!$draw) {
                $this->drawNames($event);
                break;
            }

            //takes out the name drawn out of the available people
            $availablePeople = $availablePeople->where('name', '!==', $draw->name);

        }

        //send out mail
        $event->sendAllDrawnEmails();
    }

}
