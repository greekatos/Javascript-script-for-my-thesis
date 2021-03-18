<?php
$a = 5;// gia debug
$time = time() + (7 * 24 * 60 * 60);//pairnei tin wra kai tin kanw deuterolepta
$value = array('a'=>12, 'b'=>13, 'c'=>14, 'd'=>15, 'e'=>16, 'r'=>17, 'q'=>18, 'y'=>19, 'u'=>20, 'p' =>21,'f'=>22, 'o'=>23);//Ftiaxnw pinaka me tous arithmous apo 12 ews 23
for($i=0; $i<60; $i++){//for apo i=0 mexri i=60
	$key = array_rand($value);//i metabliti key pairnei tis tixaies times tou pinaka
	$json_Object = array('id' => $i,'val' => $value[$key], 'time' => $time);//ftiaxnw json_Object me pedia id pou pairnei id to i val tin timi tou key kai time tin timi tou time
	$myArray[] = $json_Object;//Prosthetw to json_Object ston array 	
	$time = $time + 1;//prosthetw +1 second
}
echo json_encode($myArray);//to kanei echo diladi print gia na to parei i ajax kai json_encode gia na ginei json 
?>