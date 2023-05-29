@extends('layouts.base')

@section('body')
    <div class="flex min-h-screen min-w-screen flex-col justify-center py-12 bg-gradient-t-br from-blue-950 to-neutral-950 sm:px-6 lg:px-8">
        @yield('content')

        @isset($slot)
            {{ $slot }}
        @endisset
    </div>
@endsection
