<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('assets/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/form/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/ifeanyi/modal.css') }}">
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> --}}

    <title>
        @if (Session::has('title'))
            {{ Session::get('title') }}
        @else
            Title Missing
        @endif
    </title>
    <livewire:styles />
    <script type="module" defer src="{{ asset('scripts/dist/script.js') }}"></script>
</head>

<body>
    @yield('content')
    <script src="{{ asset('assets/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/jquery/jquery.min.js') }}"></script>
    <livewire:scripts />

</body>

</html>
