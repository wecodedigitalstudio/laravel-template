@extends('layouts.app') 
@extends('layouts.menu') 
@section('content')

<div class="home-section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-10 offset-1 text-center">
                <h1>We-Code Digital Studio</h1>
                <h4>Software Development</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3 text-center pt-4">
                <a href="https://github.com/wecodedigitalstudio" target="_blank">
                    <img class="mr-3" src="{{ asset('/img/github-logo.svg') }}" />
                </a>
                <a href="https://www.facebook.com/wecodestudio" target="_blank">
                    <img src="{{ asset('/img/facebook-app-logo.svg') }}" />
                </a>
            </div>
        </div>
    </div>
</div>

@endsection