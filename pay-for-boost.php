<?php session_start(); ?> 
<!DOCTYPE html>
<html>
<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112188917-1"></script>
	<script>
  		window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
  		gtag('js', new Date());
		gtag('config', 'UA-112188917-1');
	</script>
	<meta charset="utf-8">
	<meta name="description" content="League Boosting (elo) service with the CHEAPEST prices and PROFESSIONAL players, coach for League of Legends (LoL)" />
	<meta name="keywords" content="elo boost, elo boosting, lol boost, boosting, boost, league of legends, lol, cheap elo, cheap boost, cheap boost lol, league points, lol elo, elo, lol tier, lol division, league boosting, mmr boosting, lol coach, coaching lol" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/styles.css">
	<link rel="stylesheet" href="styles/footer-distributed-with-contact-form.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="stylesheet" href="./styles/owl.carousel.min.css">
	<link rel="stylesheet" href="./styles/owl.theme.default.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>lol-boost - Cheapest prices ever!</title>
</head>
<body>
	<div class="pay-for-boost-box">
		<h1>Pay for boost</h1>
		<div class="pay-for-boost-box-contener">
<?php
$cennik =array (
  0 => 
  array (
    'const' => 14,
    'lp-ratio' => 1.3300000000000001,
  ),
  1 => 
  array (
    'const' => 14,
    'lp-ratio' => 1.3300000000000001,
  ),
  2 => 
  array (
    'const' => 14,
    'lp-ratio' => 1.3300000000000001,
  ),
  3 => 
  array (
    'const' => 16,
    'lp-ratio' => 1.6699999999999999,
  ),
  4 => 
  array (
    'const' => 16,
    'lp-ratio' => 1.6699999999999999,
  ),
  5 => 
  array (
    'const' => 17,
    'lp-ratio' => 1.6699999999999999,
  ),
  6 => 
  array (
    'const' => 18,
    'lp-ratio' => 1.6699999999999999,
  ),
  7 => 
  array (
    'const' => 18,
    'lp-ratio' => 1.6699999999999999,
  ),
  8 => 
  array (
    'const' => 18,
    'lp-ratio' => 1.6699999999999999,
  ),
  9 => 
  array (
    'const' => 26,
    'lp-ratio' => 2.77,
  ),
  10 => 
  array (
    'const' => 29,
    'lp-ratio' => 2.77,
  ),
  11 => 
  array (
    'const' => 32,
    'lp-ratio' => 2.77,
  ),
  12 => 
  array (
    'const' => 35,
    'lp-ratio' => 2.77,
  ),
  13 => 
  array (
    'const' => 37,
    'lp-ratio' => 2.77,
  ),
  14 => 
  array (
    'const' => 39,
    'lp-ratio' => 4,
  ),
  15 => 
  array (
    'const' => 43,
    'lp-ratio' => 4,
  ),
  16 => 
  array (
    'const' => 48,
    'lp-ratio' => 4,
  ),
  17 => 
  array (
    'const' => 51,
    'lp-ratio' => 4,
  ),
  18 => 
  array (
    'const' => 56,
    'lp-ratio' => 4,
  ),
  19 => 
  array (
    'const' => 60,
    'lp-ratio' => 6,
  ),
  20 => 
  array (
    'const' => 121,
    'lp-ratio' => 12,
  ),
  21 => 
  array (
    'const' => 139,
    'lp-ratio' => 13,
  ),
  22 => 
  array (
    'const' => 157,
    'lp-ratio' => 15,
  ),
  23 => 
  array (
    'const' => 181,
    'lp-ratio' => 17,
  ),
  24 => 
  array (
    'const' => 280,
    'lp-ratio' => 28,
  ),
);

		$tablica[0] = "bronze_5";
		$tablica[1] = "bronze_4";
		$tablica[2] = "bronze_3";
		$tablica[3] = "bronze_2";
		$tablica[4] = "bronze_1";
		$tablica[5] = "silver_5";
		$tablica[6] = "silver_4";
		$tablica[7] = "silver_4"; 
		$tablica[8] = "silver_2";
		$tablica[9] = "silver_1";
		$tablica[10] = "gold_5";
		$tablica[11] = "gold_4";
		$tablica[12] = "gold_3";
		$tablica[13] = "gold_2";
		$tablica[14] = "gold_1";
		$tablica[15] = "platinum_5";
		$tablica[16] = "platinum_4";
		$tablica[17] = "platinum_3";
		$tablica[18] = "platinum_2";
		$tablica[19] = "platinum_1";
		$tablica[20] = "diamond_5";
		$tablica[21] = "diamond_4";
		$tablica[22] = "diamond_3";
		$tablica[23] = "diamond_2";
		$tablica[24] = "diamond_1";
		$tablica[25] = "master_1";

	$cost = 0;
	$promocja = 0.90;
	$kurs = 1.195;
	$koszt = $_POST['koszt'];
	$liga_start = $_POST['liga-start'];
	$division_start = $_POST['division-start'];
	$lp_start = $_POST['lp-start'];
	$liga_koniec = $_POST['liga'];
	$division_koniec = $_POST['division'];
	$pocz_dyw = (($liga_start*5)+$division_start);
	$startvar = (5*$liga_start)+$division_start;
	$newrank = (5*$liga_koniec)+$division_koniec;
		for($startvar;$startvar<$newrank;$startvar++){
		$cost = $cost + $cennik[$startvar]["const"];}
		$cost = $cost - ($cennik[$startvar]["lp-ratio"]*$lp_start);

		echo '<img src="img/divisions/'.$tablica[$newrank].'.png"></img>';
		echo '<div class="pay-for-boost-box-contener-text">';


		echo "Division boost: ";
		echo str_replace("_", " ", $tablica[$pocz_dyw]);
		echo " -> ";
		echo str_replace("_", " ", $tablica[$newrank]);
		echo "</br>";


		echo "Total cost: ";
		echo round($cost*$promocja)."€ (".round($cost*$promocja*$kurs)."$)</br>";
		

		echo "Conjectural completion time: 12 hours";


?>
	
	</div>
	</div>
	</div>
</body>
</html>