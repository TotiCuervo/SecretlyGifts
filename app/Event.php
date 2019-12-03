<?php

namespace App;

use App\Mail\DrawnName;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Mail;


class Event extends Model
{
    protected $fillable = ['name', 'currency', 'giftLimit', 'date', 'message'];

    public function participants() {
        return $this->hasMany(Participant::class);
    }

    public function dateText() {
        return date("l, M jS, Y", strtotime($this->date));

    }

    public function sendAllDrawnEmails() {

        foreach ($this->participants()->get() as $participant) {

            Mail::to($participant->email)->queue(
                new DrawnName($participant, $this)
            );
        }
    }
}
