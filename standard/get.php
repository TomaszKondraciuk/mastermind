<?php
 
//dane beda przekazywane w formacie JSON 
header('Content-type: application/json');
 
//Plik odpowiadajacy za polaczenie z baza danych.
require_once('connection.php');
 
//Pobieram nickname oraz score z tabeli, nastepnie segreguje zgodnie z punktacja, od najwyzszej do najnizszej, nadajac kazdemu rekordrowi pozycje RANK oraz ograniczajac zapytanie do dziesieciu rekordow( w razie remisu uwzględniam pozycje ex aequo)
$query_get = "SELECT Nickname, Score, FIND_IN_SET( Score, ( SELECT GROUP_CONCAT( DISTINCT Score ORDER BY Score DESC ) FROM MM_STANDARD) ) AS rank FROM MM_STANDARD ORDER BY rank ASC LIMIT 10;";

//Wykonanie zapytania SELECT
$result_get = mysqli_query($db, $query_get);

// Tworze tablice w ktorej bede przechowywal wynik zapytania
$data_result = array();
 
//wrzucam zawartosc do tablicy
while ($row = mysqli_fetch_row($result_get)) 
{
  $data_result[] = $row;
}
 
//Wywolanie tablicy danych jako danych w formacie JSON. 
echo json_encode($data_result);
 
?>
