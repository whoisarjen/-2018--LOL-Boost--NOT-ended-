<?php
	$styles = [
		"login" => array('login.css','logins.css'),
		"order" => array('order.css')


	];
		
	function preA($array){
		echo "<pre>";
		print_r($array);
		echo "</pre>";
	}
	

	function styleofPage($a){
		//$a : string		
		global $styles;
		$styleOUT = "";
		if(array_key_exists($a,$styles)){
			foreach($styles[$a] as  $link){
				$styleOUT.="<link rel=\"stylesheet\" type=\"text/css\" href=\"./styles/page/".$link."\">\n \t";
			}
			echo $styleOUT;
		}else{
			echo "brak styli";
		}
	}

?>