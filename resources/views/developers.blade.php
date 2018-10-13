@extends('layouts.app') 
@extends('layouts.menu') 
@section('content')

<div id="index-devs-page">

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm 12">
                <h1>@{{ title }}</h1>
            </div>
        </div>
    </div>

</div>

<script type="application/javascript" src="{{ asset('/build/developers_page.js') }}"></script>

@endsection