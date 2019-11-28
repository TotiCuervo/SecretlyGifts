<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;


class Participant extends Model
{
    protected $fillable = ['event_id', 'name', 'email', 'draw_id'];

    public function event() {
        return $this->belongsTo(Event::class);
    }

    public function exclusions() {
        return $this->hasMany(Exclusion::class);
    }

    public function draw() {
        return $this->belongsTo(Participant::class, 'draw_id');
    }

    public function drawName($names) {

        //filters out the names they are excluded from and themselves
        $available = $names->filter(function ($value, $key) {
            return !(($this->name === $value->name) || ($this->exclusions()->get()->contains('name', $value->name)));
        });

        //there were no available people
        if ($available->count() === 0) {
            return null;
        }

        //get random draw
        $draw = $available->random();

        //save it to the participant
        $this->draw_id = $draw->id;
        $this->save();

        return $draw;

    }
}
