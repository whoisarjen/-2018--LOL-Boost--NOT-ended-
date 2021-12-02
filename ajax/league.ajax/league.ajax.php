<?php
if(isset($_POST['liga'])&&isset($_POST['division'])){
	$liga = $_POST['liga'];
	$division = $_POST['division'];
}
else{
	$liga = 0;
	$division = 0;
}

$league_val = 0;

if($liga<5){
	$league_val = $liga*5+$division;
}
else if($liga==5){
	$league_val = 25;
}


$league = [
	0  => ["Bronze",4],
	1  => ["Bronze",3],
	2  => ["Bronze",2],
	3  => ["Bronze",1],
	4  => ["Bronze",0],

	5  => ["Silver",4],
	6  => ["Silver",3],
	7  => ["Silver",2], 
	8  => ["Silver",1],
	9  => ["Silver",0],

	10 => ["Gold",4],
	11 => ["Gold",3],
	12 => ["Gold",2],
	13 => ["Gold",1],
	14 => ["Gold",0],

	15 => ["Platinum",4],
	16 => ["Platinum",3],
	17 => ["Platinum",2],
	18 => ["Platinum",1],
	19 => ["Platinum",0],

	20 => ["Diamond",4],
	21 => ["Diamond",3],
	22 => ["Diamond",2],
	23 => ["Diamond",1],
	24 => ["Diamond",0],

	25 => ["Master",0],

];



// echo "Aktualna ranga: ".$league[$league_val][0]." ".$league[$league_val][1] . "(".$league_val.")<br>";
$league_val = $league_val+1;
for($league_val;$league_val<26;$league_val++){
	$group[$league[$league_val][0]][] = $league[$league_val][1];	
}

// echo "<pre>";
// print_r($group);
// echo "</pre>";
$zwracana = json_encode($group);
// echo $zwracana;
header('Content-Type: application/json');
echo json_encode($zwracana); 

?>
