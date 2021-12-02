$(document).ready(function(){

	var beforeLiga = $( "#ligaAJAX");
	var beforeDiv = $( "#divisionAJAX");
	var afterLiga = $( "#ligafromJSON");
	var afterDiv = $( "#divisionfromJSON");

	var liga_img = {
		0: "bronze_5",
		1: "bronze_4",
		2: "bronze_3",
		3: "bronze_2",
		4: "bronze_1",
		5: "silver_5",
		6: "silver_4",
		7: "silver_4", 
		8: "silver_2",
		9: "silver_1",
		10: "gold_5",
		11: "gold_4",
		12: "gold_3",
		13: "gold_2",
		14: "gold_1",
		15: "platinum_5",
		16: "platinum_4",
		17: "platinum_3",
		18: "platinum_2",
		19: "platinum_1",
		20: "diamond_5",
		21: "diamond_4",
		22: "diamond_3",
		23: "diamond_2",
		24: "diamond_1",
		25: "master_1"
	};

	var ligi = {
		"Bronze":0,
		"Silver":1,
		"Gold":2,
		"Platinum":3,
		"Diamond":4,
		"Master":5
	}

window.possibleLeague = {};

	function setLeagueIMG(a,b,c){
		// $a = ['before','after'];
		// $b : int = [0,1,2,3,4,5];
		// $c : int = [0,1,2,3,4];
		b = parseInt(b);
		c = parseInt(c);
		var liczba = b*5+(c);
		
		if(a == "before"){
			$("#imgAJAX").attr("src","./img/divisions/"+liga_img[liczba]+".png");
		}else if(a == "after"){
			$("#imgJSON").attr("src","./img/divisions/"+liga_img[liczba]+".png");
		}
	}

	function masterTier(){
		if($("#ligafromJSON option:selected").text()=="Master"){
			$("#divisionfromJSON").fadeOut(300);
		}else{
			$("#divisionfromJSON").fadeIn(300);
		}
	}

	$( "#ligaAJAX, #divisionAJAX" ).change(function(){
		var liga = parseInt(beforeLiga.val());
		var division = parseInt(beforeDiv.val());
		setLeagueIMG("before",liga,division);		
		var league_var = liga*5+division;
		$.ajax({
		    type: "POST",
		    url: "./ajax/league.ajax/league.ajax.php",
		    data: {liga: liga, division: division},
		    dataType: "json", 
		    success: function (data) {
		        	window.possibleLeague = data;
		        	desiredRank(league_var); // funkcja desiredRank z liczba z zakresu [0,25] 
		       }
			});
		 });
	
	function desiredRank($a){
		//Pobranie zawartości afterRank i zamiana na cyfry	
		var liga = $("#ligafromJSON").val();
		var division = $("#divisionfromJSON").val();
		liga = parseInt(liga);
		division = parseInt(division);
		//Utworzenie rangi nowej ligi
		var league_var = liga*5+division;
		// Jeżeli ranga ligi prawa mniejsza od rangi lewej to ranga prawa+1
		if(league_var<=$a){
			league_var=$a+1;
			var new_liga = Math.round(league_var/5 - 0.5);
			var new_division = league_var%5;
			// Ustawianie nowego obrazka dla prawej strony oraz ustawienie ligi i dywizji
			setLeagueIMG("after",new_liga,new_division);	
			$("#ligafromJSON").val(new_liga);
			$("#divisionfromJSON").val(new_division);
		}
		// Wykonanie funkcji getfromJSON;
		getfromJSON();
	};



	function getfromJSON(){
		// Ukrywanie wszystkich opcji w wyborze afterRank
		// $("#ligafromJSON option").attr("hidden",true);	
		$("#divisionfromJSON option").attr("hidden",true);
		// Dla każdej opcji ligi w afterRank
		var json_data = window.possibleLeague;
		var json_parsed = JSON.parse(json_data);
		var afterliga = $("#ligafromJSON option:selected").text();
	 	
		 		$.each(json_parsed, function (index, value) {
				    if(afterliga == index){

					  	$("#ligafromJSON option:contains('"+afterliga+"')").removeAttr("hidden");
			  			  	var text = value.toString();
			  				var myarr = text.split(",");
			  				alert(myarr);
			  				  	$.each(myarr, function (index, value) {
			  						value = 4-value;
			  						masterTier();
							  		$("#divisionfromJSON [value="+value+"]").removeAttr("hidden");
			  					});
	       			};
				});
		
	}
	
	$( "#ligafromJSON, #divisionfromJSON").change(function(){
		masterTier();
		getfromJSON();

		var liga = $("#ligafromJSON").val();
		var division = $("#divisionfromJSON").val();
		var obrazek = ($("#ligafromJSON option:selected").text());
		obrazek = obrazek.toLowerCase();
		if(obrazek=="master"){
			division=4;
		}
		var src = (obrazek+"_"+(5-division)+".png");

		$("#imgJSON").attr("src","./img/divisions/"+src);



	});





	$("#ligafromJSON,  #divisionAJAX").change(function(){
		var tablica = window.possibleLeague;
		var zwrotka = JSON.parse(tablica);

		var old_liga = $("#ligaAJAX").val();
		var new_liga = $("#ligafromJSON").val();
		var text_liga = $("#ligafromJSON option:selected").text();

	// 	$("#divisionfromJSON option").attr("hidden",true);	
	// 	console.log(old_liga+" vs "+new_liga);
	// 	if(old_liga == new_liga){
	// 							var tablica = window.leagues;
	// 			 	var zwrotka = JSON.parse(tablica);
	// 			 	var text = zwrotka[text_liga].toString();
	// 			  	var myarr = text.split(",");
	// 			  	$("#divisionfromJSON option").attr("hidden",true);	
	// 			   	   	$.each(myarr, function (index, value) {


	// 				   		index = 4-index;
	// 				  		$("#divisionfromJSON option[value="+index+"]").removeAttr("hidden");
	// 						$("#divisionfromJSON option").removeAttr('selected').filter('[value=4]').attr('selected', true);		

	// 				  	});


					  	
	// 	}
	// 	else if(old_liga != new_liga){	

	// 		console.log("ligi rozne");
	// 			var text = zwrotka[text_liga].toString();
	// 			  	var myarr = text.split(",");
	// 			 	   	$.each(myarr, function (index, value) {
	// 				   		index = 4-index;
	// 				  		$("#divisionfromJSON [value="+index+"]").removeAttr("hidden");
	// 						$("#divisionfromJSON option").removeAttr('selected').filter('[value=4]').attr('selected', true);		

	// 				  	});
	// 	}
	// });
	});
});
	