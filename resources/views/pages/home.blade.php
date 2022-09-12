@extends('layouts.app')

@section('content')
    <h1>Home Page</h1>
    <ul>
        <li>{{ $user->name }}</li>
        <li>{{ $user->email }}</li>
        <li>{{ $user->created_at }}</li>
        <li>{{ $user->updated_at }}</li>
    </ul>
    <a href="{{ route('logOut') }}" class="btn btn-danger">LogOut</a>
@endsection
