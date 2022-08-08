<?php 
    header('Access-Control-Allow-Origin: http://localhost:3000/login'); 
    $user = $_POST['userLogin']; 
    // $user1 = $_POST['username'];
    // echo ("Name from html : $user1")
    echo ("Name from react : $user"); 
?> 
