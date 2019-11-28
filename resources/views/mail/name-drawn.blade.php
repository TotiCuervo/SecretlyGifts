@component('mail::message')

<div class="w-full text-center text-5xl text-indigo-700">
    <div class="font-baloo font-extrabold">
        Secretly
    </div>
</div>

# {{$participant->name}},

{{$event->message}}

<div class="w-full text-center pt-8">
    <div class="block text-black text-xl text-indigo-700 font-baloo">
        Your Drawn Name:
    </div>
    <div class="block font-baloo text-xl text-indigo-700">
        {{$participant->draw->name}}
    </div>
</div>

<div class="flex flex-wrap text-black pt-8 items-center">
    <div class="w-full font-bold text-center">
        A few details about your gift exchange:
    </div>
    @if($event->giftLimit)
        <div class="w-1/2 flex-1 pt-5 text-center">
            <div class="block font-bold">
                Gift Limit:
            </div>
            <div class="block">
                {{$event->currency}}{{$event->giftLimit}}
            </div>
        </div>
    @endif
    @if($event->date)
        <div class="w-1/2 flex-1 pt-5 text-center">
            <div class="block font-bold">
                Date of Event:
            </div>
            <div class="block">
                {{$event->dateText()}}
            </div>
        </div>
    @endif
</div>

<div class="w-full text-center pt-10 text-sm">
    Want to start your own Secretly Gift Exchange? <a class="font-bold text-indigo-700 hover:text-indigo-800 text-decoration-none active:bounce-md trans-fast" href="http://secretly.test/#/">Let's get started!</a>
</div>

@slot('footer')
    @component('mail::footer')
        Hello World
    @endcomponent
@endslot

@endcomponent
