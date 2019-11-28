<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class DrawnName extends Mailable
{
    use Queueable, SerializesModels;

    public $participant;
    public $event;

    public function __construct($participant, $event)
    {
        $this->participant = $participant;
        $this->event = $event;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mail.name-drawn');
    }
}
