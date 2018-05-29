<?php
 
//definiuje zmienne niezbedne do polaczenia
$host = 'localhost';
$user = 'bi4lyscm_tomasz';
$password = 'h,5AB$zLmwsU';
$db_name = 'bi4lyscm_mastermind';
  
//lacze sie z baza
$db = mysqli_connect($host, $user, $password, $db_name);
 
//w razie bledu wyswietlam komunikat
if (mysqli_connect_errno()) 
{
    echo 'ERROR';
    exit;   
}

?>
