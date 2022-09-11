<?php
namespace App\Modules;

use Illuminate\Support\Facades\Response;

function responseErrorMessage($message){
    return [
        'error' => true,
        'message' => $message
    ];
}


?>