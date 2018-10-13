<?php
    namespace App\Http\Controllers;

    class WelcomeController extends Controller {      

        /**
        * Welcome
        *
        * @return Response
        */
        public function index() {
            return view('welcome');
        }


    }