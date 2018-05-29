<?php

//Plik odpowiadajacy za polaczenie z baza danych.
require_once('connection.php');

//pobieramy dane od strony klienta
$checknickname  = $_POST['nickname'];
$checkscore  = $_POST['score'];

//sprawdzam nickname, czy nie zawiera niebezpiecznych znakow(zabezpieczenie przed SQL injection)
function filter($checknickname) 
{
  $checknickname = substr($checknickname, 0, 9); // Ograniczenie ciągu do pierwszych 10 znaków
  $checknickname = trim($checknickname); //Usuwa biale, puste znaki z poczatku oraz końca ciagu
  $checknickname = stripslashes($checknickname); //Usuwa znak '\' z ciagu znakow
  $checknickname = htmlspecialchars($checknickname); //Konwertuje znaki specjalne na znaczniki HTML
  return $checknickname; 
}
$checknickname_filtered=filter($checknickname);


//sprawdzam czy gracz wpisal nickname
if( !$checknickname_filtered){
  $result = 2;
}
else {
   //jesli tak, to wstawiam uzyskany score oraz nick do tabeli
   $sql    = "insert into MM_ADVANCED (Nickname, Score) values (?, ?)  ";
   $stmt   = $db->prepare($sql);
   $stmt->bind_param('si', $checknickname_filtered, $checkscore);
    //jesli wszystko poszlo okej zwracam 1
   if($stmt->execute()){
     $result = 1;
   }
}
echo $result;


?>
