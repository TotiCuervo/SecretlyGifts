<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exclusion extends Model
{
    protected $fillable = ['participant_id', 'name'];

    public function participant() {
        $this->belongsTo(Participant::class);
    }
}
