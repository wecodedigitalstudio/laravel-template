<?php
    namespace App\Http\Controllers;

    class DevelopersController extends Controller {      

        /**
        * Developers
        *
        * @return Response
        */
        public function index() {
            return view('developers');
        }


    }